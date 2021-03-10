const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const login = async(req = request, res = response) => {

    // const { limite = 10, desde = 0 } = req.query;
    // const query = { state: true };

    // const [ total, usuarios ] = await Promise.all([
    //     Usuario.countDocuments(query),
    //     Usuario.find(query)
    //         .skip( Number( desde ) )
    //         .limit(Number( limite ))
    // ]);

    res.status(202).json({
       msn:"post user!"
    });
}


module.exports = {
    login
}
