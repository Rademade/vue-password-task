import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PasswordCheck from '../../../src/views/PasswordCheck.vue';
import PasswordInput from '../../../src/components/PasswordInput.vue';
import Rules from '../../../src/components/Rules.vue';
import PasswordStrengthIndicator from '../../../src/components/PasswordStrengthIndicator.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PasswordCheck', () => {
  let wrapper;
  let inputWrapper;
  let rulesWrapper;
  let passwordStrengthIndicatorWrapper;

  const store = new Vuex.Store({
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
  });

  const mountComponent = () => {
    wrapper = shallowMount(PasswordCheck, {
      localVue,
      stubs: [
        'password-input',
        'password-strength-indicator',
      ],
      store,
    });
  };
  const mountPasswordInput = () => {
    inputWrapper = shallowMount(PasswordInput, {
      localVue,
      store,
    });
  };
  const mountRules = () => {
    rulesWrapper = shallowMount(Rules, {
      localVue,
      store,
    });
  };
  const mountPasswordStrengthIndicator = () => {
    passwordStrengthIndicatorWrapper = shallowMount(PasswordStrengthIndicator, {
      localVue,
      store,
    });
  };

  beforeEach(() => {
    mountComponent();
    mountPasswordInput();
    mountRules();
    mountPasswordStrengthIndicator();
  });

  afterEach(() => {
    if (wrapper && wrapper.exists()) {
      wrapper.destroy();
    }
    if (inputWrapper && inputWrapper.exists()) {
      inputWrapper.destroy();
    }
    if (rulesWrapper && rulesWrapper.exists()) {
      rulesWrapper.destroy();
    }
    if (passwordStrengthIndicatorWrapper && passwordStrengthIndicatorWrapper.exists()) {
      passwordStrengthIndicatorWrapper.destroy();
    }
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain password field', () => {
    expect(inputWrapper.get('[data-test="password-field"]').attributes('type')).toEqual('password');
  });

  describe('rules', () => {
    describe('when password has one letter', () => {
      beforeEach(async () => {
        store.commit('setPassword', 'a');
      });

      it('should highlight one letter is satisfied', () => {
        expect(rulesWrapper.get('[data-test-rule="OneLetter"]').classes('rules-list__item--checked')).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(rulesWrapper.get('[data-test-rule="OneNumber"]').classes('rules-list__item--checked')).toBe(false);
      });
    });

    describe('when password has lower an upper letters', () => {
      beforeEach(async () => {
        store.commit('setPassword', 'aB');
      });

      it('should highlight one letter is satisfied', () => {
        expect(rulesWrapper.get('[data-test-rule="OneLetter"]').classes('rules-list__item--checked')).toBe(true);
      });
      it('should highlight upper and lower letter is satisfied', () => {
        expect(rulesWrapper.get('[data-test-rule="UpperAndLower"]').classes('rules-list__item--checked')).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(rulesWrapper.get('[data-test-rule="OneNumber"]').classes('rules-list__item--checked')).toBe(false);
      });
    });
  });


  describe('strength validation', () => {
    it('should be rendered', () => {
      expect(passwordStrengthIndicatorWrapper.find('[data-test="password-strength"]').exists()).toBeTruthy();
    });

    describe('when less than 5 rules satisfied', () => {
      const examples = ['', 'aaa', 'aB$4'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is weak`, async () => {
          await store.commit('setPassword', password);

          expect(passwordStrengthIndicatorWrapper.get('[data-test="password-strength"]').text()).toEqual('Weak');
        });
      });
    });

    describe('when more at least 5 rules satisfied', () => {
      const examples = ['aB$41', '1234567891233Rademade', '1234567Av$'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is strong`, async () => {
          await store.commit('setPassword', password);

          expect(passwordStrengthIndicatorWrapper.get('[data-test="password-strength"]').text()).toEqual('Strong');
        });
      });
    });
  });
});
