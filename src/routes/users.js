/**
 * @description shop router
 * @author zsy
 */

const router = require('koa-router')()

// 引入用户注册
const {
  register,
  login
} = require('../controller/user')

const {
  SuccessModel,
  ErrorModel
} = require('../res-model/index')

// api前缀
router.prefix('/api/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 用户注册
router.post('/register', async function (ctx, next) {
  // 获取前端的request.body
  const {
    username,
    password
  } = ctx.request.body
  // 进行注册
  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    console.error(ex)
    ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
  }
})

// 用户登录
router.post('/login', async function (ctx, next) {
  // 获取前端请求数据
  const {
    username,
    password
  } = ctx.request.body

  // 进行登录验证
  const findUserResult = await login(username, password)
  if (findUserResult) {
    // 登录成功，设置session
    ctx.session.userInfo = {
      username
    }
    // ctx.body = new SuccessModel()
    ctx.body = {
      status: 0,
      data: {
        username: 'admin',
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWFybmVyLXVzZXIiLCJpYXQiOjE2MzY2MzUwODYsImV4cCI6MTYzNjYzNjg4NiwiaWQiOiIyYzkxMDAxMDdjYjZmNjRkMDE3Y2I3NTFjMzc3MDAwMSIsIm5pY2tuYW1lIjoiaWNlIiwiYXZhdGFyIjoiaHR0cHM6Ly9sZWFybmVyY21zLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9hdmF0YXIvMjAyMS8xMC8yNS9jNTgxYjdiMC02NGFiLTQxNGEtOTE3Zi0yN2NjZGU2N2JjYmQuanBnIn0.h6Botlr8m_jciEm2OZGsA4bw9_MOs3M4ILnyEPKPv_E"
      }
    }
  } else {
    // 登录失败
    ctx.body = new ErrorModel(10002, '登录验证失败')
  }
})

module.exports = router