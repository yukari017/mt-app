import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: '成都'
}

const mutation = {
  setPositon (state, val) {
    state.position = val
  }
}

const actions = {
  setPositon ({ comit }, val) {
    // 异步请求后端获取当前位置数据
    comit('setPosition', val)
  }
}
export default new Vuex.Store({
  state,
  mutation,
  actions
})
