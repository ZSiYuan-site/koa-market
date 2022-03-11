/**
 * @description 模拟商店操作
 * @author zsy
 */

const shopModel = require('../../models/Shop')

    !(async () => {
        // 创建商店
        // await shopModel.create({
        //     name: '宜家',
        //     // 图片路径直接根据相对于 pubilc文件夹
        //     imgUrl: '/images/test.jpg',
        //     sales: 999,
        //     expressLimit: 30,
        //     expressPrice: 5,
        //     slogan: 'VIP尊享',
        // })

        // 查询商店列表
        // const shopLists = await shopModel.find().sort({
        //     _id: -1
        // })
        // console.log(shopLists)   

        // 根据id获取对应的商店信息
        const id = '6208d617dad8f472adca6226'
        const shop = await shopModel.findById(id)
        console.log(shop)
    })()