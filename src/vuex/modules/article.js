import {GET_ARTICLE, MODIFY_ARTICLE, UPDATE_ARTICLE} from '../mutation-types.js'
import moment from 'moment'
moment.locale('zh-cn')

const state = {
  title: '',
  content: '',
  author: '',
  summary: '',
  createTime: ''
}

const mutations = {
  [GET_ARTICLE] (state, data) {
    state.content = data.content
    state.title = data.title
    state.author = data.author
    state.summary = data.summary
    state.createTime = moment(data.createTime).format('LL')
  },
  [MODIFY_ARTICLE] (state, target, value) {
    state[target] = value
  },
  [UPDATE_ARTICLE] (state, data) {
  }
}

export default {
  state,
  mutations
}
