/**
 * @description Address Model
 * @author zsy
 */

const mongoose = require('../db/db')

// 请来一个保安
let Schemal = mongoose.Schema

// 制定你家的规则
const addressRules = new Schemal({
    username: {
        type: String,
        require: true,
    },
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String,
}, {
    timestamps: true
})

// 告诉保安，你家的规则
const AddressModel = mongoose.model('address', addressRules)

module.exports = AddressModel