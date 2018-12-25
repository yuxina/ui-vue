<template>
  <div class="page-content cleafix">
    <nav-area class="nav-wrap" :data="navData"></nav-area>
    <div class="page-component">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import navData from '../navData.js'
import navArea from '../components/nav.vue'
export default {
  data () {
    return {
      navData
    }
  },
  components: {
    navArea
  },
  methods: {

  }
}
</script>

<style lang="scss">
.nav-wrap{
  width: 240px;
  float: left;
}
.page-component{
  width: 960px;
  min-height: 600px;
  padding: 0 20px;
  float: left;
  border-left: 1px solid #DCDCDC;
  box-sizing: border-box;
  h2, h3, h4, h5{
    a {
      float: left;
      margin-left: -20px;
      color: #ffffff;
      &:hover{
        color: #088cce;
      }
    }
  }
}
</style>

