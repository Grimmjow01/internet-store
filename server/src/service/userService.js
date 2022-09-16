const Models = require('../../db/models');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { 
    generateTokens, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken 
} = require('./tokenService');
const UserDto = require('../dtos/userDto');
const MailService = require('./mailService');
const ApiError = require('../exceptions/apiError');

const registrationService = async (login, email, password) => {
    const candidate = await Models.User.findOne({ where: { email } });
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await Models.User.create({ login, email, password: hashPassword, activationLink });
        
    await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ... userDto});

    await saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto};
};

const activateService = async (activationLink) => {
    const user = await Models.User.findOne({ where: { activationLink }});
        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации'); 
    }
    user.isActivated = true;
    await user.save();
 };

const loginService = async (email, password) => {
    const user = await Models.User.findOne({ where: { email }});
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден');
    };
    const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
    };
        const userDto = new UserDto(user);
        const tokens = generateTokens({ ... userDto});

        await saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
 };

const logoutService = async(refreshToken) => {
    const token = await removeToken(refreshToken);
    return token;
};

const refreshService = async(refreshToken) => {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError();
    };
    const userData = validateRefreshToken(refreshToken);
    const tokenFromDb = await findToken(refreshToken);
    if(!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
    };

    const user = await Models.User.findOne({ where: { id: tokenFromDb.user_id }});
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ... userDto});

    await saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto};
};

const getAllUsersService = async() => {
    const users = await Models.User.findAll();
    return users;
};

module.exports = { registrationService, activateService, loginService, logoutService, refreshService, getAllUsersService };