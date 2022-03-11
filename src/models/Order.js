/**
 * @description Order Model
 * @author zsy
 */

const mongoose = require('../db/db')

// 请来一个保安
let Schemal = mongoose.Schema

// 制定你家的规则
const orderRules = new Schemal({
    username: {
        type: String,
        require: true,
    },
    shopId: String,
    shopName: String,

    isCanceled: {
        type: Boolean,
        default: false
    },

    address: {
        username: String,
        city: String,
        department: String,
        houseNumber: String,
        name: String,
        phone: String,
    },
    products: [{
        pro: {
            shopId: {
                type: String,
                require: true
            },
            name: String,
            imgUrl: String,
            sales: Number,
            price: Number,
            oldPrice: Number,
            tabs: [String]
        },
        orderSales: Number
    }]
}, {
    timestamps: true
})

// 告诉保安，你家的规则
const OrderModel = mongoose.model('order', orderRules)

module.exports = OrderModel