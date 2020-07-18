<template>
  <span>
    <template v-if="isStrong">Strong</template>
    <template v-else>Weak</template>
  </span>
</template>
<script>
export default {
  props: {
    isStrong: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
