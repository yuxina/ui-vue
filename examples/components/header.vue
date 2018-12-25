<template>
  <div class="page-header">
    <div class="page-header-cont">
      <h1><img class="logo" src="../assets/images/logo.png" alt="srd-ui-vue"></h1>
      <ul class="menu">
        <li @click="goTo('/')" class="menu-item">首页</li>
        <li @click="goTo('/components/installation')" class="menu-item">组件</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goTo: function(url){
      this.$router.push(url);
    }
  }
}
</script>
<style lang="scss">
.page-header{
  height: 80px;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  line-height: 80px;
  z-index: 100;
  position: relative;
  .page-header-cont{
    height: 100%;
    box-sizing: border-box;
    h1{
      margin: 0;
      float: left;
      height: 80px;
      font-size: 32px;
      font-weight: 400;
      color: #000000;
    }
    .logo{
      height: 50px;
      padding: 15px 0;
    }
  }
  .menu{
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0 10px;
    color: #000000;
  }
  .menu-item{
    padding: 0 20px;
    margin: 0;
    font-size: 18px;
    float: left;
    list-style: none;
    position: relative;
    font-weight: 500;
    color: #999999;
    cursor: pointer;
    &:hover{
      color: #088cce;
    }
  }
}
</style>

