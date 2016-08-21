import {GET_ARTICLE_LIST, POST_ARTICLE, REMOVE_ARTICLE} from '../mutation-types.js'
import moment from 'moment'
moment.locale('zh-cn')

const state = {
  articleList: []
}

const mutations = {
  [GET_ARTICLE_LIST] (state, items) {
    for (let i in items) {
      items[i].createTime = moment(items[i].createTime).startOf('day').fromNow()
    }
    state.articleList = items
  },
  [POST_ARTICLE] (state, data) {
    state.articleList.push(data)
  },
  [REMOVE_ARTICLE] (state, data) {
  }
}

export default {
  state,
  mutations
}
