# 数据模型设计
> 其实就是列举出各个数据模型的示例，写明属性

## 用户
```
{
    _id:'xx'
    username:'137xxxxx'
    password:'123'
}
```

## 地址
```
{
    username:'137xxxxx',    //就和用户产生关联
    city:'北京',
    department:'xx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'136xxxxxxx',
}
```

## 商店
```
{
    _id:'shangpinId'
    name:'沃尔玛',
    imgUrl:'xx.png',
    sales:1000,
    expressLimit:0,
    expressPrice:5,
    slogan:'红色的宣传语'
}
```

## 商品
```
{
    _id:'xxx',
    shopId:'shangdianId',  // 对应商店的 _id
    name:'番茄',
    imgUrl:'xxx.png',
    sales:10,
    price:'33.1',
    oldPrice:'40.9',
}
```

## 订单
```
{
    _id:'xxx',

    username:'demo'

    shopId:'shangdianId',
    shopName:'沃尔玛',
    isCanceled:'false', // 订单是否取消

    address:{
        username:'demo',   
        city:'北京',
        department:'xx小区',
        houseNumber:'门牌号',
        name:'张三',
        phone:'136xxxxxxx',
    },

    products:[
        {
            product:{
                _id:'xxx',
                shopId:'shangdianId',  // 对应商店的 _id
                name:'番茄',
                imgUrl:'xxx.png',
                sales:10,
                price:'33.1',
                oldPrice:'40.9',
            },
            orderSales:3
        },
        ...
    ]
}
```