<template>
  <div>
    <input
      data-test="password-field"
      type="password"
      placeholder="password"
      :value="password"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>

export default {
  props: {
    password: {
      type: String,
      default: '',
    },
  },
};
</script>
