<template>
  <div class="password-input">
    <form class="password-input__form">
      <label for="password" class="password-input__form-label">Password:</label>
      <div class="password-input__form-input-wrapper">
        <input
          v-model="password"
          :type="inputType"
          data-test="password-field"
          id="password"
          class="password-input__form-input"
        />
        <i
          class="password-input__form-input-icon"
          :class="`password-input__form-input-icon--${inputType}`"
          @click.prevent="toggleInputType"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputType: 'password',
    };
  },
  methods: {
    toggleInputType() {
      this.inputType = this.inputType === 'text' ? 'password' : 'text';
    },
  },
  computed: {
    password: {
      get() {
        return this.$store.state.password;
      },
      set(p) {
        this.$store.commit('setPassword', p);
      },
    },
  },
};
</script>
<style lang="scss">
  @import "../assets/scss/all";

  .password-input {
    &__form {
      margin: $x2-and-a-half auto $x-and-a-half;
      position: relative;
      &-label {
        position: relative;
        left: $half-x;
        font-size: 12px;
        height: 14px;
        cursor: pointer;
      }
      &-input {
        display: block;
        width: 100%;
        padding: $quarter-x;
        height: 24px;
        border: 1px solid $black;
        border-radius: 2px;
        &-wrapper {
          position: relative;
        }
        &-icon {
          $iconSize: 16px;
          position: absolute;
          width: $iconSize;
          height: $iconSize;
          right: $half-x;
          top: calc(50% - (#{$iconSize} / 2));
          cursor: pointer;
          &--text {
            background: url('../assets/icons/eye-slash.svg');
          }
          &--password {
            background: url('../assets/icons/eye.svg');
          }
        }
      }
    }
  }
</style>
