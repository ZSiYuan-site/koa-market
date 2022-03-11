/**
 * @description product controller
 * @author zsy
 */
const OrderModel = require('../models/Order')
const AddressModel = require('../models/Address')
const ProductModel = require('../models/Product')

/**
 * 创建订单
 * @param {string} orderRequestBody 订单信息
 * @param {*} username 用户名
 * @returns 
 */
async function createOrder(orderRequestBody, username) {
    // 地址信息
    const addressInfo = await AddressModel.findById(orderRequestBody.addressId)

    // 已购买的商品id 数组
    const proIdArr = orderRequestBody.products.map(item => {
        return item.id
    })

    // 商品的信息
    const proList = await ProductModel.find({
        shopId: orderRequestBody.shopId,
        // 表示 _id 包含在 proIdArr 数组中
        _id: {
            $in: proIdArr
        }
    })
    // 最终封装完的商品数组
    const productsList = proList.map(item1 => {
        // 必须要转为 字符串
        const id = item1.id.toString()
        // 找到购买商品的数量
        const result = orderRequestBody.products.filter(item2 => item2.id === id)
        return {
            products: item1,
            orderSales: result[0].num
        }
    })

    const newOrder = await OrderModel.create({
        username,
        shopId: orderRequestBody.shopId,
        shopName: orderRequestBody.shopName,
        isCanceled: orderRequestBody.isCanceled,
        address: addressInfo,
        products: productsList
    })

    return newOrder
}

module.exports = {
    createOrder
}