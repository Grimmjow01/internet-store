const jwt = require('jsonwebtoken');
const Models = require('../../db/models');

const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn:'30m'}) // '{expiresIn:'30'}' - время жизни токена
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn:'30d'})
    return {
        accessToken,
        refreshToken
    };
};

const saveToken = async(userId, refreshToken) => {
    const tokenData = await Models.Token.findOne({ where: { user_id: userId }});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        };
    const token = await Models.Token.create({ user_id: userId, refreshToken });
        return token; 
};

const removeToken = async(refreshToken) => {
    const tokenData = await Models.Token.destroy({where: { refreshToken }});
    return tokenData;
};

const validateAccessToken = (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
    } catch (error) {
        return null;
    };
};

const validateRefreshToken = (token) => {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
    } catch (error) {
        return null;
    };
};

const findToken = async(refreshToken) => {
    const tokenData = await Models.Token.findOne({where: { refreshToken }});
    return tokenData;
};

module.exports = { generateTokens, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken };