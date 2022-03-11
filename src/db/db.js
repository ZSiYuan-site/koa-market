/**
 * @description mongoose 连接数据库
 * @author zsy
 */

const mongoose = require('mongoose')

const IP = 'localhost'
const PORT = '27017'
const DB_NMAE = 'shop'

mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NMAE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('open', err => {
    if (err) {
        console.log('连接数据库失败', err)
    } else {
        console.log('连接数据库成功')
    }
})

module.exports = mongoose