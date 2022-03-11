# 接口文档

## 登录

### url
> api/user/login

### method 
> post

### request body 
```
{
    username:'demo',
    password:'123'
}
```

### response body 
```
{
    errno:0,
    message:'errno !==0 时，其错误信息'
}
```

## 注册

### url
> api/user/register

### method 
> post

### request body 
```
{
    username:'demo',
    password:'123'
}
```

### response body 
```
{
    errno:0,
    message:'errno !==0 时，其错误信息'
}
```

## 创建收货地址

### url
> api/user/address

### method 
> post

### request body 
```
{
    city:'北京',
    department:'xx小区',
    houseNumber:'门牌号',
    name:'张三',
    phone:'1363234233',
}
```

### response body 
```
{
    errno:0,
    data:{
        _id:'收获地址的 id',
        city:'北京',
        department:'xx小区',
        houseNumber:'门牌号',
        name:'张三',
        phone:'1363234233',
    }
    message:'errno !==0 时，其错误信息'
}
```

## 获取地址列表

### url
> api/user/address

### method 
> get

### request body 
```
    空
```

### response body 
```
{
    errno:0,
    data:[
        {
            _id:'收获地址的 id',
            city:'北京',
            department:'xx小区',
            houseNumber:'门牌号',
            name:'张三',
            phone:'1363234233',
        },
        ...
        ...
    ]
    message:'errno !==0 时，其错误信息'
}
```


## 获取单个地址

### url
> api/user/address/:id

> 示例 ： api/user/address/100 

### method 
> get

### request body 
```
    空
```

### response body 
```
{
    errno:0,
    data: {
            _id:'收获地址的 id',
            city:'北京',
            department:'xx小区',
            houseNumber:'门牌号',
            name:'张三',
            phone:'1363234233',
        }
    message:'errno !==0 时，其错误信息'
}
```

## 更新收获地址

### url
> api/user/address/:id

> 示例 ： api/user/address/100 

### method 
> patch

### request body 
```
    {
        city:'北京',
        department:'xx小区',
        houseNumber:'门牌号',
        name:'张三',
        phone:'1363234233',
    }
```

### response body 
```
{
    errno:0,
    message:'errno !==0 时，其错误信息'
}
```



## 获取附近商店

### url
> api/shop/hot-list

### method 
> get

### request body 
```
   空
```

### response body 
```
{
    errno:0,
    data :[
        {
            _id:'商店id',
            name:'沃尔玛',
            imgUrl:'沃尔玛 的 图片 url',
            sales: 1000 , // 月售
            expressLimit:0, // 快递起送价格
            expressPrice: 5 ,  // 快递费
            slogan : 'VIP 尊享满 89 减 4 元'
        },
        ...
    ]
    message:'errno !==0 时，其错误信息'
}
```

## 根据商店id查询商店介绍

### url
> api/shop/:id

> 示例 ： api/shop/100

### method 
> get

### request body 
```
   空
```

### response body 
```
{
    errno:0,
    data :{
            _id:'商店id',
            name:'沃尔玛',
            imgUrl:'沃尔玛 的 图片 url',
            sales: 1000 , // 月售
            expressLimit:0, // 快递起送价格
            expressPrice: 5 ,  // 快递费
            slogan : 'VIP 尊享满 89 减 4 元'
        },
    message:'errno !==0 时，其错误信息'
}
```

## 根据商店id查询商店的商品列表

### url
> api/shop/:id/products

### query

> 举例 ： api/shop/10/products?tab = 全部  

> 举例 ： api/shop/10/products?tab = 秒杀


### method 
> get

### request body 
```
   空
```

### response body 
```
{
    errno:0,
    data :[
        {
            _id:'商品id',
            name:'番茄 250g/份',
            imgUrl:'xxx.png',
            sales:10,  // 销量
            price:33.3,
            oldPrice:43,
        }
    ]
    message:'errno !==0 时，其错误信息'
}
```

## 创建订单

### url
> api/order

### method 
> post

### request body 
```
   {
    addressId:'收货地址 id',
   // 备注 ：当前的项目，同一个订单只允许在一个商店购买
    shopId:'商店的 id',
    shopName:'沃尔玛',
    isCanceled:false,  // 订单是否取消
    products:[
        {
            id:'商品1 id',
            mun:3            // 购买数量
        },
        {
            id:'商品2 id',
            mun:10            // 购买数量
        }
    ]
   }
```

### response body 
```
{
    errno:0,
    data :{
            _id:'订单 id',
        }
    message:'errno !==0 时，其错误信息'
}
```

