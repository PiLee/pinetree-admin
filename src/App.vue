<template lang="jade">
div
  sidebar
  .main-content
    router-view
</template>

<script>
import Sidebar from './components/Sidebar'
import store from './vuex/store'

export default {
  components: {
    Sidebar
  },
  store
}
</script>

<style lang="scss">
  @import './src/scss/style.scss'
</style>
