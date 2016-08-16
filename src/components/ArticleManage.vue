<template lang="jade">
  h1 文章管理
  ul(v-for="article in articleList")
    li {{ article.title }}
      a(v-link="{ name: 'post-edit', params: { id: article._id }}") 编辑
</template>

<script>
import {articleList} from '../vuex/getters'
import {getArticleList} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      articleList: articleList
    },
    actions: {
      getArticleList: getArticleList
    }
  },
  created () {
    this.getArticleList()
  }
}
</script>

