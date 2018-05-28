export default {
  state: {
    bob: 'bobbobbbobbobbbob'
  },
  getters: {
  },
  mutations: {
    HOHO (state, token) {
      state.bob = token
    },
    HAHA (state) {
      state.bob = null
    }
  },
  actions: {
    HOHO ({commit}, data) {
      commit('HOHO', data.email)
    },
    HAHA ({commit}) {
      commit('HAHA')
    }
  }
}
