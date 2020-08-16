<template>
  <span
    :class="indicatorClasses">
    {{indicator}}
  </span>
</template>
<script>
export default {
    props: {
      indicator: {
          type: String
      },
      password: {
          type: String
      }
    },
  computed: {
      indicatorClasses() {
          let classes = ['indicator'];
          if(!!this.password.length) classes.push('is-active');
          return classes;
      }
  }
};
</script>

<style lang="sass" scoped>
  .indicator
    font-size: 12px
    position: absolute
    opacity: 0
    visibility: hidden
    transition: opacity .3s ease, visibility .3s ease
    &.is-active
      opacity: 1
      visibility: visible
</style>
