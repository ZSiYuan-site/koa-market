/**
 * @description 模拟操作商品
 * @author zsy
 */

const ProductModel = require('../../models/Product')

    !(async () => {
        // 为 宜家 商店 添加商品
        const shopId = '6208d617dad8f472adca6226'
        // ProductModel.create({
        //     shopId,
        //     name: '香蕉',
        //     imgUrl: '/images/test.jpg',
        //     sales: 13,
        //     price: 12,
        //     oldPrice: 50,
        //     tabs: ['all', 'seckill']
        // })

        // 查询某个商店，某个tab 的商品列表
        const list = await ProductModel.find({
            // 根据指定的商店id，以及商品的 tabs 包含了fruit
            shopId,
            tabs: {
                $in: 'fruit'
            }
        })
        console.log(list)
    })()