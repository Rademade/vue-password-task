<template>
  <div class="password-check">
    <PasswordInput/>
    <Rules />
    <PasswordStrengthIndicator/>
  </div>
</template>
<script>
import PasswordInput from '../components/PasswordInput.vue';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator.vue';
import Rules from '../components/Rules.vue';

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
};
</script>
<style lang="scss" scoped>
  @import "../assets/scss/all";

  .password-check {
    max-width: 360px;
    padding: 0 $x2-and-a-half;
    margin: $x-3 auto;
  }
</style>
