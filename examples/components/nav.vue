<template>
  <div>
    <ul class="nav" v-for="(item, index) in data" :key="index">
      <li class="nav-item" @click="changeView(item.path)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    data: Array
  },
  methods: {
    // 切换路由
    changeView: function(url){
      this.$router.push('/components' + url);
    } 
  }
}
</script>
<style lang="scss">
.nav{
  width: 100%;
  float: left;
  .nav-item{
    font-size: 14px;
    padding: 5px;
    line-height: 28px;
    color: #999999;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      color: #088cce;
    }
  }
}
</style>

