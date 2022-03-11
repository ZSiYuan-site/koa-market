/**
 * @description Shop Model
 * @author zsy
 */

const mongoose = require('../db/db')

// 请来一个保安
let Schemal = mongoose.Schema

// 制定你家的规则
const shopRules = new Schemal({
    name: String,
    imgUrl: String,
    sales: Number,
    expressLimit: {
        type: Number,
        default: 0
    },
    expressPrice: Number,
    slogan: String
}, {
    timestamps: true
})

// 告诉保安，你家的规则
const shopModel = mongoose.model('shop', shopRules)

module.exports = shopModel