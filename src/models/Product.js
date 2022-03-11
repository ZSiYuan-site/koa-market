/**
 * @description Product Model
 * @author zsy
 */

const mongoose = require('../db/db')

// 请来一个保安
let Schemal = mongoose.Schema

// 制定你家的规则
const ProductRules = new Schemal({
    shopId: {
        type: String,
        require: true
    },
    name: String,
    imgUrl: String,
    sales: Number,
    price:Number,
    oldPrice:Number,
    tabs:[String]  // 示例 ：tabs:['all','seckill']
}, {
    timestamps: true
})

// 告诉保安，你家的规则
const ProductModel = mongoose.model('product', ProductRules)

module.exports = ProductModel