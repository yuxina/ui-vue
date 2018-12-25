<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>
<script>
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    MainHeader,
    MainFooter
  },
  methods: {

  }
}
</script>
<style lang="scss">
  @import './assets/styles/base.css';
  .page-content{
    min-height: 600px;
    width: 1200px;
    margin: 0 auto;
  }
</style>

