/**
 * @description shop controller
 * @author zsy
 */
const shopModel = require('../models/Shop')


/**
 * 获取附近商店
 * @returns 
 */
async function getHotShop() {
    const hotShopList = await shopModel.find().sort({
        _id: -1
    })
    return hotShopList
}

/**
 * 
 * @param {string} shopId 商店的id
 * @returns 
 */
async function getShopInfoById(shopId) {
    const shopInfo = await shopModel.findById(shopId)
    return shopInfo
}


module.exports = {
    getHotShop,
    getShopInfoById
}