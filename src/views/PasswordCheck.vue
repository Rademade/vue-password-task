<template>
  <div>
    <PasswordInput v-model="password" />
    <PasswordStrengthIndicator
      data-test="password-strength"
      :passedRules="passedRules.length"
    />
    <Rules :passedRules="passedRules" />
  </div>
</template>
<script>
import PasswordInput from '@/components/PasswordInput.vue';
import PasswordStrengthIndicator from '@/components/PasswordStrengthIndicator.vue';
import Rules from '@/components/Rules.vue';

import passwordValidator from '@/utils/passwordValidator';

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },
  data: () => ({
    password: '',
  }),
  computed: {
    passedRules() {
      return passwordValidator(this.password);
    },
  },
};
</script>

<style>
</style>
