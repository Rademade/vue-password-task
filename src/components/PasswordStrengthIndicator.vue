<template>
  <span>{{ passwordStength }}</span>
</template>

<script>
export default {
  props: {
    passedRules: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    passwordStength() {
      return this.passedRules > 4 ? 'Strong' : 'Weak';
    },
  },
};
</script>
