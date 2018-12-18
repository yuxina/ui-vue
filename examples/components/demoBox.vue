<template>
  <div>
    <section class="demo-box">
      <section class="demo-box-eg">
        <!-- 示例效果 -->
        <slot name="eg"></slot>
      </section>
      <section class="demo-box-code" v-show="isExpanded">
        <div class="desc">
          <!-- 描述 -->
          <slot name="desc"></slot>
        </div>
        <div class="source">
          <!-- 源码 -->
          <slot name="source"></slot>
        </div>
      </section>
      <section class="demo-box-control" @click="isExpanded = !isExpanded">
        <span v-if="!isExpanded">查看代码</span>
        <span v-else>隐藏代码</span>
      </section>
    </section>

  </div>
</template>
<script>
export default {
  data () {
    return {
      isExpanded: false, // 代码区域，默认折叠
    }
  },
  props: {
    jsfiddle: Object,
    default () {
      return {}
    },
  },
}
</script>
<style lang="scss">
.demo-box {
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 3px;
  .demo-box-eg {
    width: 100%;
    border: 1px solid #d0d0d0;
    padding: 20px;
  }
  .demo-box-code {
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #d0d0d0;
    border-top: 0;
    padding: 5px 0;
    .desc {
      font-size: 14px;
      line-height: 22px;
      color: rgb(102, 102, 102);
      word-break: break-word;
      background-color: rgb(255, 255, 255);
      padding: 20px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(235, 235, 235);
      border-image: initial;
      border-radius: 3px;
      margin: 10px;
      p {
        line-height: 26px;
        margin: 0px;
        code {
          color: rgb(94, 109, 130);
          background-color: rgb(230, 239, 251);
          display: inline-block;
          font-size: 12px;
          height: 18px;
          line-height: 18px;
          margin: 0px 4px;
          padding: 1px 5px;
          border-radius: 3px;
        }
      }
    }
    .source {
      margin: 10px;
    }
  }
  .demo-box-control {
    text-align: center;
  }
}
</style>

