'use strict'

const Models = require('../../db/models');

const getUsersLogins = async (req, res) => {
    try {
        const allLogins = await Models.User.findAll({raw: true});
        return res.json(allLogins);
    } catch (error) {
        console.log(error);
    };
};

module.exports = { getUsersLogins };