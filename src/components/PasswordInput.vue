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
