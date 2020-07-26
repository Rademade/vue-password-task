<template>
  <div class="password-strength-indicator">
    <p
      class="password-strength-indicator__text"
      :class="`password-strength-indicator__text--${showStrength.toLowerCase()}`"
    >
      Your password is <span data-test="password-strength">{{ showStrength }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      checkedRules: 'getCheckedRules',
    }),
    showStrength() {
      return Object.values(this.checkedRules).filter(item => item).length > 4 ? 'Strong' : 'Weak';
    },
  },
};
</script>
<style lang="scss">
  @import "../assets/scss/all";

  .password-strength-indicator {
    &__text {
      margin-top: $x-and-a-half;
      &--strong {
        color: $main-color;
      }
      &--weak {
        color: $red;
      }
    }
  }
</style>
