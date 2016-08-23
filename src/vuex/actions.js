import * as types from './mutation-types'
import { API_ROOT } from '../config'

export const getArticleList = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/article-list').then(response => {
    dispatch(types.GET_ARTICLE_LIST, JSON.parse(response.body))
  })
}

export const getArticle = function ({ dispatch }, id) {
  this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
    console.log(JSON.parse(response.body))
    dispatch(types.GET_ARTICLE, JSON.parse(response.body))
  })
}

export const postArticle = function ({ dispatch }, data, callback) {
  this.$http.post(API_ROOT + 'api/post/', data).then(response => {
    dispatch(types.POST_ARTICLE, data)
    callback(response.ok)
  })
}

export const modifyArticle = function ({ dispatch }, target, value, callback) {
  dispatch(types.MODIFY_ARTICLE, target, value)
}

export const updateArticle = function ({ dispatch }, id, data, callback) {
  this.$http.post(API_ROOT + 'api/ariticle-update/' + id, data).then(response => {
    dispatch(types.UPDATE_ARTICLE, data)
    callback(response.ok)
  })
}

export const removeArticle = function ({ dispatch }, id, callback) {
  this.$http.post(API_ROOT + 'api/ariticle-remove/' + id, {}).then(response => {
    dispatch(types.REMOVE_ARTICLE, id)
    callback(response.ok)
  })
}
