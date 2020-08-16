<template>
  <span class="indicator">{{indicator}}</span>
</template>
<script>
export default {
    props: {
      indicator: {
          type: String
      }
    }
};
</script>

<style lang="sass" scoped>
  .indicator
    font-size: 12px
    position: absolute
</style>
