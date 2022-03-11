const AddressModel = require('../models/Address')

/**
 * 创建收货地址
 * @param {string} param0 用户名
 * @param {object} addressBody 地址信息
 * @returns 
 */

async function createAddress(username, addressBody) {
    const newAddress = await AddressModel.create({
        username,
        ...addressBody,
    })
    return newAddress
}


// 获取收货地址
async function getAllAddress(username) {
    const allAddress = await AddressModel.find({
        username
    })
    return allAddress
}

/**
 * 根据地址id获取地址信息
 * @param {*} addressId 
 * @returns 
 */
async function getAddressById(addressId) {
    const addressInfo = await AddressModel.findById(addressId)
    return addressInfo
}


/**
 * 根据地址id更新收货地址
 * @param {string} addressId 地址id
 * @param {string} username 用户名
 * @param {*} oldAddressInfo 旧地址的详细信息
 * @returns 
 */
async function updataAddressById(addressId, username, oldAddressInfo) {
    const updataAddressInfo = await AddressModel.findOneAndUpdate({
        _id: addressId,
        username
    }, oldAddressInfo, {
        new: true
    })
    return updataAddressInfo
}

module.exports = {
    createAddress,
    getAllAddress,
    getAddressById,
    updataAddressById
}