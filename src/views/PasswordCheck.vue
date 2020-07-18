<template>
  <div>
    <PasswordInput @password-changed="handlePasswordChanged" />
    <Rules :rules="rules" />
    <PasswordStrengthIndicator
      data-test="password-strength"
      :is-strong="numberOfSatisfied >= 5"
    />
  </div>
</template>
<script>
import PasswordInput from '../components/PasswordInput.vue';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator.vue';
import Rules from '../components/Rules.vue';
import RULE from '../common/constants/rules';

const regExp = {
  oneLetter: /[A-Za-z]+/,
  oneLowerOneUpper: /(?=.*[a-z])(?=.*[A-Z])/,
  oneNumber: /.*[0-9].*/,
  oneSpecialCharacter: /(?=.*\W)/,
};

export default {
  components: {
    Rules,
    PasswordInput,
    PasswordStrengthIndicator,
  },

  data() {
    return {
      rules: {
        [RULE.OneLetter]: false,
        [RULE.UpperAndLower]: false,
        [RULE.OneNumber]: false,
        [RULE.SpecialSymbol]: false,
        [RULE.LongerThan4]: false,
        [RULE.LongerThan8]: false,
        [RULE.LongerThan12]: false,
      },
    };
  },

  computed: {
    numberOfSatisfied() {
      return Object
        .values(this.rules)
        .filter((rule) => rule).length;
    },
  },

  methods: {
    handlePasswordChanged(value) {
      const checkRule = this.checkRule(value);

      checkRule(RULE.OneLetter, this.withRegExp(regExp.oneLetter));
      checkRule(RULE.UpperAndLower, this.withRegExp(regExp.oneLowerOneUpper));
      checkRule(RULE.OneNumber, this.withRegExp(regExp.oneNumber));
      checkRule(RULE.SpecialSymbol, this.withRegExp(regExp.oneSpecialCharacter));
      checkRule(RULE.LongerThan4, this.lengthGraterThen(4));
      checkRule(RULE.LongerThan8, this.lengthGraterThen(8));
      checkRule(RULE.LongerThan12, this.lengthGraterThen(12));
    },

    checkRule(value) {
      return (rule, checker) => {
        this.rules[rule] = checker(value);
      };
    },

    withRegExp(exp) {
      return (value) => exp.test(value);
    },

    lengthGraterThen(number) {
      return (value) => value.trim().length > number;
    },
  },
};
</script>
