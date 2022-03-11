const ProductModel = require('../models/Product')

/**
 * 
 * @param {string} shopId 商店的id
 * @param {string} tab 用户选择分类 可能是 all seckill fruit
 * @returns 
 */
async function getProductByShopId(shopId, tab) {
    const products = await ProductModel.find({
        shopId,
        tabs: {
            $in: tab
        }
    }).sort({
        _id: -1
    })
    return products
}


module.exports = {
    getProductByShopId
}