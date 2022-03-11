/**
 * @description 模拟订单操作
 * @author zsy
 */

const OrderModel = require('../../models/Order')
const shopModel = require('../../models/Shop')
const UserModel = require('../../models/User')
const AddressModel = require('../../models/Address')
const ProductModel = require('../../models/Product')


    !(async () => {
        // 前端提交过来的数据
        const requestBody = {
            addressId: '6208c34e7586b3665315570f',
            shopId: '6208d617dad8f472adca6226',
            shopName: '沃尔玛',
            isCanceled: false,
            products: [{
                id: '6208d8c59097a6355e580eb0',
                num: 3
            }, {
                id: '6208d927c4ae44479db29009',
                num: 332
            }]
        }

        // 地址信息
        const addressInfo = await AddressModel.findById(requestBody.addressId)
        // console.log(addressInfo)
        // 已购买的商品id 数组
        const proIdArr = requestBody.products.map(item => {
            return item.id
        })
        // console.log(proIdArr)

        // 商品的信息
        const proList = await ProductModel.find({
            shopId: requestBody.shopId,
            // 表示 _id 包含在 proIdArr 数组中
            _id: {
                $in: proIdArr
            }
        })
        // console.log(proList)

        // 最终封装完的商品数组
        const productsList = proList.map(item1 => {
            // 必须要转为 字符串
            const id = item1.id.toString()
            // 找到购买商品的数量
            const result = requestBody.products.filter(item2 => item2.id === id)
            return {
                products: item1,
                orderSales: result[0].num
            }
        })
        // console.log(productsList)

        // 模拟创建订单 
        await OrderModel.create({
            username: 'demo',
            shopId: requestBody.shopId,
            shopName: requestBody.shopName,
            isCanceled: requestBody.isCanceled,
            address: addressInfo,
            products: productsList
        })
    })()