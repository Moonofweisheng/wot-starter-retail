import UserInfo from '@/model/UserInfo'
import { defineStore } from 'pinia'

interface AuthStore {
  // 鉴权令牌
  userInfo: UserInfo | null
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useAuthStore = defineStore('authState', {
  // state: 返回对象的函数
  state: (): AuthStore => ({
    userInfo: null
  }),
  getters: {},
  actions: {
    logout() {
      this.userInfo = null
    }
  }
})
