import request from '@/utils/request'

/**
 * 图片验证码
 * @param {number} clientToken clientToken
 * @returns promise
 */
 export function loginCode(clientToken) {
    return request({
        url: `/user-service/user/imageCode/${clientToken}`,
    })
}

/**
 * 登录请求
 * @param {Object} data password loginName
 * @return promise
 */
 export function login(data) {
    return request({
        url: '/user-service/user/login',
        method: 'POST',
        data,
    })
}