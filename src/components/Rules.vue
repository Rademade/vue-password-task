<template>
  <div class="rules">
    <header class="rules__header">
      <div class="rules__title">Set a Password</div>
      <div class="rules__subtitle">Must contain at least</div>
    </header>
    <!--BEGIN RULES LIST-->
    <ul class="rules__list">
      <li
        :class="rulesClasses(rule)"
        v-for="(label, rule) in rulesLabels"
        :data-test-rule="rule"
        :key="rule" >
        <div class="rules__label">
          {{label}}
        </div>
      </li>
    </ul>
    <!--END RULES LIST-->
  </div>

</template>
<script>

export const RULE = {
  OneLetter: 'OneLetter',
  UpperAndLower: 'UpperAndLower',
  OneNumber: 'OneNumber',
  SpecialSymbol: 'SpecialSymbol',
  LongerThan4: 'LongerThan4',
  LongerThan8: 'LongerThan8',
  LongerThan12: 'LongerThan12',
};

export default {
  props: {
    validationRules: {
        type: Object,
        required: true
    }
  },
  methods: {
      rulesClasses(rules) {
        let classes = ['rules__item'];
        if(this.validationRules[rules]) classes.push('is-valid');
        return classes;
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

<style lang="sass" scoped>
  .rules
    color: #2A1E49
    position: relative
    max-width: 300px
    width: 100%
    margin: 0 auto
    &__header
      text-align: center
      color: white
      margin-bottom: 10px
    &__list
      margin: 0
      padding: 10px 15px
      list-style-type: none
      background-color: white
      border-radius: 5px
      position: relative
      &:before
        content: ''
        z-index: 1
        display: block
        position: absolute
        background: #f84194
        width: 1px
        height: 90%
        left: 8px
    &__item
      font-size: 12px
      width: 100%
      padding: 3px 0
      border-bottom: solid blue 1px
      display: flex
      &.is-valid
        .rules__label
          &:before
            width: 100%
            opacity: 1
    &__label
      position: relative
      &:before
        content: ''
        content: ''
        z-index: 1
        display: block
        position: absolute
        transform: translateY(-50%) rotate(2deg)
        top: 50%
        left: 0
        background-color: #32B997
        height: 3px
        width: 0
        opacity: 0
        transition: width .3s ease, opacity .3s ease

</style>
