import {login,loginCode,getUserInfoApi} from '@/api/user'
import router from '@/router'
import { Message } from 'element-ui';
export default {
  namespaced: true,
  state: {
    token:'',
    imgUrl:'',
    userId:''
  },
  mutations: {
    setCode(state, payload){
      state.imgUrl= payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setUserId(state, payload) {
      state.userId = payload
    },
  },
  actions: {
    // 图片验证码
    async getCode(context,payload){
      const res=await loginCode(payload)
      // console.log(res);
      context.commit('setCode', res.request.responseURL)
    },
    // 登录
    async getToken(context,payload){
      const res=await login(payload)
      // console.log(res);
      context.commit('setToken', res.data.token)
      context.commit('setUserId',res.data.userId)
    },
    // 获取用户信息
    async getUserInfo(context,payload){
      const res=await getUserInfoApi(payload)
      console.log(res)
      // context.commit('setUserInfo',{...userBaseInfo,...userInfo})
    }
  }
}
