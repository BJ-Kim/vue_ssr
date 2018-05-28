import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './AuthStore'

Vue.use(Vuex)

const moduleA = {
  state: {
    token: 'dddas'
  },
  getters: {
  },
  mutations: {
    LOGIN (state, token) {
      state.token = token
    },
    LOGOUT (state) {
      state.token = null
    }
  },
  actions: {
    LOGIN ({commit}, data) {
      commit('LOGIN', data.email)
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    }
  }
}

export default new Vuex.Store({
  modules: {
    moduleA: moduleA,
    AuthStore: AuthStore,
  }
})

