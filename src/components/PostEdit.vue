<template lang="jade">
div
  h1 编辑
  p
    label 标题
    input.post-title(type="text", :value="post.title", name="title", @input="modify")
  p
    label 概要
    textarea.post-summary(:value="post.summary", name="summary", @input="modify")
  p
    label 正文
    textarea.post-content(:value="post.content", name="content", @input="modify")
  div.post-preview(v-html="post.preview")
  p
    button(@click="submit()") 提交
</template>

<script>
import {article} from '../vuex/getters'
import {getArticle, postArticle, modifyArticle, updateArticle} from '../vuex/actions'
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})

export default {
  data () {
    return {

    }
  },
  vuex: {
    getters: {
      post: article
    },
    actions: {
      getArticle,
      postArticle,
      modifyArticle,
      updateArticle
    }
  },
  methods: {
    submit () {
      this.updateArticle(this.$route.params.id, this.post, response => {
        if (response) {
          console.log('编辑成功')
        }
      })
    },
    modify (e) {
      var target = e.target.name
      var newValue = e.target.value
      this.modifyArticle(target, newValue)
    }
  },
  watch: {
    'post.content': function () {
      this.post.preview = marked(this.post.content)
    }
  },
  created () {
    this.getArticle(this.$route.params.id)
  }
}
</script>

<style>
p{
  margin-bottom: 1em;
}
label{
  margin-right: 1em;
}
.post-title{
  width:30em;
  height:3em;
}
.post-summary{
  width:30em;
  height:5em;
}
.post-content{
  width:30em;
  height:30em;
}
.post-preview{
  position: absolute;
  top:1em;
  right:1em;
  width:50%;
}
</style>