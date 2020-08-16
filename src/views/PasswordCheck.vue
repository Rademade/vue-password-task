<template>
  <div class="form">
    <Rules :validationRules="validationRules"/>

    <form class="form-l" @submit.prevent="formSubmitHandler">
      <div class="form-l__row">
        <PasswordInput @setPassword="setPassword"/>
        <PasswordStrengthIndicator :indicator="validationStrengthIndicator" data-test="password-strength"/>
      </div>
      <div class="form-l__row">
        <button class="form-l__button"
                :disabled="validationFormSubmit"
                type="submit">
          Save
        </button>
      </div>
    </form>

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
    },
    formSubmitHandler() {
        console.log('fire api')
    }
  },
  computed: {
    validationRules () {
      return this.validation.reduce((result, item) => {
        result[item.label] = item.validate(this.password);
        return result;
      }, {});
    },
    validationStrengthIndicator() {
      if(!this.password) return
      let validationCount = Object.values(this.validationRules).filter(Boolean).length;
      return validationCount > 4 ? "strong" : "weak";
    },
    validationFormSubmit() {
      return !Object.values(this.validationRules).every(rule => rule)
    }
  },
};
</script>
<style lang="sass" scoped>
  .form
    max-width: 300px
    border-radius: 10px
    box-shadow: 0 0 5px rgba(107,119,140,.4)
    width: 100%
    margin: 0 auto
    background: linear-gradient(#553096, #40266D)
    color: white
    font-family: Arial, Helvetica, sans-serif
    padding: 15px 10px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center



</style>
