<template>
  <!--
    功能描述：
    1.
   -->
  <button class="st-button">
    <span>{{type}}</span>
  </button>
</template>
<script>
export default {
  name: 'StButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
  },
  mounted: function () {
    window.dd = true
  },
}
</script>

