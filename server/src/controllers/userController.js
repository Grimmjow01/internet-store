const { 
    registrationService, activateService, loginService, logoutService, refreshService, getAllUsersService 
} = require('../service/userService');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/apiError');

const registration = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }
      const { email, password } = req.body;
      const userData = await registrationService(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });  
      return res.json(userData);

    } catch (error) {
        next(error);
    }
  };

  const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userData = await loginService(email, password);
        res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });  
        return res.json(userData);

    } catch (error) {
        next(error);
    }
  };

  const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const token = await logoutService(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (error) {
        next(error);
    }
  };

  const activate = async (req, res, next) => {
    
    try {
        const activationLink = req.params.link;
        await activateService(activationLink);
        return res.redirect(process.env.CLIENT_URL);

    } catch (error) {
        next(error);
    }
  };

  const refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        const userData = await refreshService(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });  
        return res.json(userData);

    } catch (error) {
        next(error);
    }
  };

  const getUsers = async (req, res, next) => {
    try {
      const users = await getAllUsersService(); 
      return res.json(users);
    } catch (error) {
        next(error);
    }
  };

module.exports = {  registration, login, logout, activate, refresh, getUsers };