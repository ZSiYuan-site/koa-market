const router = require('koa-router')()

const loginCheck = require('../middlewares/loginCheck')

const {
    SuccessModel,
    ErrorModel
} = require('../res-model/index')

const {
    getProductByShopId
} = require('../controller/product')

// api前缀
router.prefix('/api/shop')


router.get('/:id/products', loginCheck, async function (ctx, next) {
    const shopId = ctx.params.id
    const tab = ctx.query.tab || 'all'
    const products = await getProductByShopId(shopId, tab)
    ctx.body = new SuccessModel(products)
})

module.exports = router