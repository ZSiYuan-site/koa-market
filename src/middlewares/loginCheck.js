/**
 * @description 登录验证的中间件
 * @author zsy
 */

const {
    ErrorModel
} = require('../res-model/index')

async function loginCheck(ctx, next) {
    const userInfo = ctx.session.userInfo
    console.log(userInfo)
    if (userInfo && userInfo.username) {
        // 登录验证成功
        await next()
        return
    }
    // 登录失败
    ctx.body = new ErrorModel(10003, '登录验证失败')
}
module.exports = loginCheck