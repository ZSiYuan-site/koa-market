/**
 * @description 成功返回的数据模型
 * @author zsy
 */

class SuccessModel {
    constructor(data) {
        this.errno = 0
        if (data != null) {
            this.data = data
        }
    }
}

module.exports = SuccessModel