<template lang="jade">
  h1 文章管理
  ul(v-for="article in articleList")
    li {{ article.title }}
      a(v-link="{ name: 'post-edit', params: { id: article._id }}") 编辑
      a(@click="remove(article._id)") 删除
</template>

<script>
import {articleList} from '../vuex/getters'
import {getArticleList, removeArticle} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      articleList
    },
    actions: {
      getArticleList,
      removeArticle
    }
  },
  methods: {
    remove (id) {
      this.removeArticle(id, response => {
        if (response) {
          console.log('删除成功')
        }
      })
    }
  },
  created () {
    this.getArticleList()
  }
}
</script>

