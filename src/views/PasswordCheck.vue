<template>
  <div>
    <PasswordInput @setPassword="setPassword"/>
    <Rules />
    <PasswordStrengthIndicator data-test="password-strength"/>
  </div>
</template>
<script>
import PasswordInput from '../components/PasswordInput.vue';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator.vue';
import Rules from '../components/Rules.vue';

export default {
  data() {
      return {
        password: ''
      }
  },
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
  methods: {
    setPassword(password) {
      this.password = password;
    }
  },
};
</script>
<style>
</style>
