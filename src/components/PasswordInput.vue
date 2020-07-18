<template>
  <label>
    <input
      v-model="password"
      type="password"
      data-test="password-field"
      @input="handleChangePassword"
    >
  </label>
</template>
<script>
export default {
  data: () => ({
    password: '',
  }),

  methods: {
    handleChangePassword(e) {
      this.$emit('password-changed', e.target.value);
    },
  },
};
</script>
<style></style>
