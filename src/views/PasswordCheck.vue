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
import {leastOneLetterRegex, specialCharsRegex, upperAndLowerRegex, numberRegex} from '@/helpers/regex.js'
export default {
  data() {
      return {
        password: '',
        validation: [
          {label: 'OneLetter',     validate: field => leastOneLetterRegex.test(field)},
          {label: 'UpperAndLower', validate: field => upperAndLowerRegex.test(field)},
          {label: 'OneNumber',     validate: field => numberRegex.test(field)},
          {label: 'SpecialSymbol', validate: field => specialCharsRegex.test(field)},
          {label: 'LongerThan4',   validate: field => field.length > 4},
          {label: 'LongerThan8',   validate: field => field.length > 8},
          {label: 'LongerThan12',  validate: field => field.length > 12},
        ]
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
