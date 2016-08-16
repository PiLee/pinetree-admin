import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  },
  '/post': {
    component: function (resolve) {
      require(['./components/Post'], resolve)
    }
  },
  '/manage': {
    component: function (resolve) {
      require(['./components/Manage'], resolve)
    }
  },
  '/manage/article': {
    component: function (resolve) {
      require(['./components/ArticleManage'], resolve)
    }
  },
  '/post-edit/:id': {
    name: 'post-edit',
    component: function (resolve) {
      require(['./components/PostEdit'], resolve)
    }
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
