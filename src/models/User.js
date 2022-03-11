/**
 * @description User Model
 * @author zsy
 */

const mongoose = require('../db/db')

// 请来一个保安
let Schemal = mongoose.Schema

// 制定你家的规则
const userRules = new Schemal({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: String
}, {
    timestamps: true
})

// 告诉保安，你家的规则
const UserModel = mongoose.model('user', userRules)

module.exports = UserModel