/**
 * @description 测试用户数据操作
 * @author
 */

const UserModel = require('../../models/User')

    !(async () => {
        // 模拟用户注册功能
        // await UserModel.create({
        //     username: 'demo2',
        //     password: '123'
        // })

        // 用户登录
        const demo = await UserModel.findOne({
            username: 'demo',
            password: '123'
        })
        console.log(demo)
    })()