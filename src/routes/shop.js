const router = require('koa-router')()

const loginCheck = require('../middlewares/loginCheck')

const {
    SuccessModel,
    ErrorModel
} = require('../res-model/index')


const {
    getHotShop,
    getShopInfoById
} = require('../controller/shop')

// api前缀
router.prefix('/api/shop')


// 获取附近商店
router.get('/hot-list', loginCheck, async function (ctx, next) {
    // 获取附近商店
    const hotShopList = await getHotShop()
    ctx.body = new SuccessModel(hotShopList)
})

// 根据商店id查询商店介绍
router.get('/:id', loginCheck, async function (ctx, next) {
    const shopId = ctx.params.id
    // 查询商店
    const shopInfo = await getShopInfoById(shopId)
    ctx.body = new SuccessModel(shopInfo)
})

module.exports = router