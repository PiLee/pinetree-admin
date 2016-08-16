<template lang="jade">
  .sidebar
    ul
      li
        a(v-link="{ path: '/post' }") 发布
      li
        a(v-link="{ path: '/manage' }") 管理
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
