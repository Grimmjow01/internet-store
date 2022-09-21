'use strict'

const Models = require('../../db/models');

const getTypesController = async (req, res) => {
    try {
        const allTypes = await Models.Type.findAll();
        return res.json(allTypes);
    } catch (error) {
        console.log(error);
    };
};

module.exports = { getTypesController };