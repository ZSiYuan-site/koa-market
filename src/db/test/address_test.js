/**
 * @description 模拟收获地址
 * @author zsy
 */

const AddressModel = require('../../models/Address')

    !(async () => {
        // await AddressModel.create({
        //     // 创建收获地址
        //     username: 'demo',
        //     city: '深圳市',
        //     department: 'yyy小区',
        //     houseNumber: '门牌号2',
        //     name: '李四',
        //     phone: '186666666'
        // })

        // 获取用户的收获地址列表（获取demo的）
        // sort({updateAt: -1}) 表示按照 updateAt字段 逆序 进行输入
        // 逆序 从大到小输出
        // const addressList = await AddressModel.find({
        //     username: 'demo'
        // }).sort({
        //     updateAt: -1
        // })
        // console.log(addressList)

        // 根据 id 获取单个收获地址
        // const id = '6208c34e7586b3665315570f'
        // const address = await AddressModel.findById(id)
        // console.log(address)

        // 更新收获地址
        const id = '6208c34e7586b3665315570f'
        const newData = {
            username: 'demo',
            city: '新的地址11',
            department: '新的小区111',
            houseNumber: '新的门牌号111',
            name: '新的昵称11',
            phone: '136434334'
        }
        const address = await AddressModel.findOneAndUpdate({
            _id: id,
            username: 'demo'
        }, newData, {
            new: true
        })
        console.log(address)
    })()