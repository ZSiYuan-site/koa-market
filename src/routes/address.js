/**
 * @description address router
 * @author zsy
 */

const router = require('koa-router')()

const {
    createAddress,
    getAllAddress,
    getAddressById,
    updataAddressById
} = require('../controller/address')

// api前缀
router.prefix('/api/user/address')

// 成功和失败返回数据模型
const {
    SuccessModel,
    ErrorModel
} = require('../res-model/index')

const loginCheck = require('../middlewares/loginCheck')

// 创建收获地址路由
router.post('/', loginCheck, async function (ctx, next) {
    // 前端并没有不需要传入 username，但是我们又要把username写入数据库的addresses表（为了与用户相关联）
    // 所以从session获取
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    const addressBody = ctx.request.body
    // 创建收货地址
    const newAddress = await createAddress(username, addressBody)
    try {
        ctx.body = new SuccessModel(newAddress)
    } catch (ex) {
        console.log(ex)
        ctx.body = new ErrorModel('10004', `创建收货地址失败---${ex.message}`)
    }
})

// 获取收获地址列表
router.get('/', loginCheck, async function (ctx, next) {
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    const allAddress = await getAllAddress(username)
    console.log(allAddress)
    ctx.body = new SuccessModel(allAddress)
})

// 获取单个收获地址
router.get('/:id', loginCheck, async function (ctx, next) {
    const addressId = ctx.params.id
    // 根据地址id获取地址信息
    const addressInfo = await getAddressById(addressId)
    ctx.body = new SuccessModel(addressInfo)
})

// 更新收货地址
router.patch('/:id', loginCheck, async function (ctx, next) {
    const addressId = ctx.params.id
    const oldAddressInfo = ctx.request.body
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    // 更新收货地址
    const newAddressInfo = await updataAddressById(addressId, username, oldAddressInfo)
    ctx.body = new SuccessModel(newAddressInfo)
})

module.exports = router