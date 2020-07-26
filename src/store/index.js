import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    password: '',
    passwordRules: {
      OneLetter: 'OneLetter',
      UpperAndLower: 'UpperAndLower',
      OneNumber: 'OneNumber',
      SpecialSymbol: 'SpecialSymbol',
      LongerThan4: 'LongerThan4',
      LongerThan8: 'LongerThan8',
      LongerThan12: 'LongerThan12',
    },
  },
  mutations: {
    setPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
  },
  getters: {
    getCheckedRules(state) {
      return {
        [state.passwordRules.OneLetter]: /[A-Za-z]/.test(state.password),
        [state.passwordRules.UpperAndLower]: /[A-Z]/.test(state.password) && /[a-z]/.test(state.password),
        [state.passwordRules.OneNumber]: /\d/.test(state.password),
        [state.passwordRules.SpecialSymbol]: /\W/.test(state.password),
        [state.passwordRules.LongerThan4]: state.password.length > 4,
        [state.passwordRules.LongerThan8]: state.password.length > 8,
        [state.passwordRules.LongerThan12]: state.password.length > 12,
      };
    },
  },
  modules: {
  },
});
