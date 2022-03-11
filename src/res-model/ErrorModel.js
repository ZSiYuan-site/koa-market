/**
 * @description 失败的返回数据模型
 * @author
 */

class ErrorModel {
    constructor(errno = -1, message = "error") {
        this.errno = errno
        this.message = message
    }
}

module.exports = ErrorModel