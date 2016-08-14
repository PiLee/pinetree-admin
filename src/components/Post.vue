<template lang="jade">
  h1 发布
    p
      input(type="text", v-model="post.title")
    p
      textarea(v-model="post.content")
    p
      button(@click="submit()") 提交
</template>

<script>
import {postArticle} from '../vuex/actions'
export default {
  data () {
    return {
      post: {}
    }
  },
  vuex: {
    actions: {
      postArticle: postArticle
    }
  },
  methods: {
    submit () {
      this.postArticle(this.post)
    }
  }
}
</script>
