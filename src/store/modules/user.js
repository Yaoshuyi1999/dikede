import {login,loginCode} from '@/api/user'
import router from '@/router'
import { Message } from 'element-ui';
export default {
  namespaced: true,
  state: {
    token:'',
    clientToken:'',
    imgUrl:'',
  },
  mutations: {
    setNumber(state){
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
      }
      state.clientToken=getRandom(0, 10000)
    },
    setCode(state, payload){
      state.imgUrl= payload
    },
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    // 改变随机数
    getNumber(context){
      context.commit('setNumber')
    },
    // 图片验证码
    async getCode(context,payload){
      const res=await loginCode(payload)
      // console.log(res);
      context.commit('setCode', res.request.responseURL)
    },
    // 登录
    async getToken(context,payload){
      const res=await login(payload)
      console.log(res);
      if(res.data.success){
        context.commit('setToken', res.data.token)
        router.push('/')
        Message.success(res.data.msg)
      }else{
        Message.error(res.data.msg)
      }
    },
  }
}
