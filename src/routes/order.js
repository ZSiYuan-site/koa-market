const router = require('koa-router')()

const loginCheck = require('../middlewares/loginCheck')

const {
    SuccessModel,
    ErrorModel
} = require('../res-model/index')

const {
    createOrder
} = require('../controller/order')

// api前缀
router.prefix('/api/order')

router.post('/', loginCheck, async function (ctx, next) {
    const {
        username
    } = ctx.session.userInfo

    const orderRequestBody = ctx.request.body
    // 创建订单
    const newOrder = await createOrder(orderRequestBody, username)
    ctx.body = new SuccessModel(newOrder)
})

module.exports = router