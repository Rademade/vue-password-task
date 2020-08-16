<template>
  <input
    class="form-l__input"
    type="password"
    placeholder="Enter your password"
    data-test="password-field"
    @input="setPassword($event)"
  >

</template>
<script>
  export default {
    methods: {
      setPassword(event) {
        let {value} = event.target;
        this.$emit('setPassword', value)
      }
    }
  };
</script>
<style lang="sass" scoped>
  .form-l
    &__input
      width: 280px
      outline: none
      border: none
      padding: 8px 10px 10px
      border-radius: 5px
      font-size: 16px
</style>
