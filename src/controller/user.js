/**
 * @description user controller
 * @author zsy
 */
const UserModel = require('../models/User')

/**
 * 
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns
 */
async function register(username, password) {
    const newUser = await UserModel.create({
        username,
        password
    })
    return newUser
}


/**
 * 
 * @param {string} username 用户名
 * @param {string} password 密码
 */
async function login(username, password) {
    const findUserResult = await UserModel.findOne({
        username,
        password
    })
    if (findUserResult != null) {
        return true
    }
    return false
}

module.exports = {
    register,
    login
}