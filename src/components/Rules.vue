<template>
  <ul class="rules-list">
    <li
      v-for="(label, rule) in rulesLabels"
      :key="rule"
      :data-test-rule="rule"
      class="rules-list__item"
      :class="{ 'rules-list__item--checked' : checkedRules[rule] }"
    >
      {{ label }}
    </li>
  </ul>
</template>
<script>

import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState([
      'password',
      'passwordRules',
    ]),
    ...mapGetters({
      checkedRules: 'getCheckedRules',
    }),
    rulesLabels() {
      return {
        [this.passwordRules.OneLetter]: 'Has at least one letter',
        [this.passwordRules.UpperAndLower]: 'Has at least one lower and one upper case letter',
        [this.passwordRules.OneNumber]: 'Has at least one number',
        [this.passwordRules.SpecialSymbol]: 'Has at least one special character',
        [this.passwordRules.LongerThan4]: 'Has length > 4',
        [this.passwordRules.LongerThan8]: 'Has length > 8',
        [this.passwordRules.LongerThan12]: 'Has length > 12',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/all";

  .rules-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__item {
      list-style-type: none;
      position: relative;
      $pointSize: 6px;
      &::before, &::after {
        content: '';
        display: block;
        background-color: $main-color;
        position: absolute;
        transition: all ease;
      }
      &::before {
        left: -$x-2;
        width: $pointSize;
        height: $pointSize;
        border-radius: 50%;
        top: calc(50% - (#{$pointSize} / 2));
        transform-origin: center;
        transition-duration: .42s;
      }
      &::after {
        height: 2px;
        left: calc((#{$pointSize} / 2) - #{$x-2});
        right: calc(100% + #{$x-2});
        border-radius: 1px;
        top: calc(50% - 1px);
        transition-duration: .57s;
      }
      &--checked {
        &::before {
          transform: scale(.0000001);
        }
        &::after {
          right: -$x-2;
        }
      }
    }
  }
</style>
