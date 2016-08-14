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
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
