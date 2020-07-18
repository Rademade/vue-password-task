<template>
  <ul>
    <li
      v-for="(label, rule) in rulesLabels"
      :data-test-rule="rule"
      :key="rule"
      :class="{ 'is-satisfied': rules[rule] }"
    >
      {{label}}
    </li>
  </ul>
</template>
<script>
import RULE from '../common/constants/rules';

export default {
  props: {
    rules: {
      type: Object,
      required: true,
    },
  },

  computed: {
    rulesLabels() {
      return {
        [RULE.OneLetter]: 'Has at least one letter',
        [RULE.UpperAndLower]: 'Has at least one lower and one upper case letter',
        [RULE.OneNumber]: 'Has at least one number',
        [RULE.SpecialSymbol]: 'Has at least one special character',
        [RULE.LongerThan4]: 'Has length > 4',
        [RULE.LongerThan8]: 'Has length > 8',
        [RULE.LongerThan12]: 'Has length > 12',
      };
    },
  },
};
</script>

<style scoped>
  .is-satisfied {
    background-color: green;
  }
</style>
