import Vue from 'vue';
import { mount } from '@vue/test-utils';
import PasswordCheck from '../../../src/views/PasswordCheck.vue';
import RULE from '../../../src/common/constants/rules';

describe('PasswordCheck', () => {
  let wrapper;

  const mountComponent = () => {
    wrapper = mount(PasswordCheck);
  };

  const setPasswordTo = async (password) => {
    wrapper.get('[data-test="password-field"]').setValue(password);
    await Vue.nextTick();
  };

  const returnSatisfied = (attrValue) => wrapper.get(`[data-test-rule="${attrValue}"]`).classes('is-satisfied');

  beforeEach(() => {
    mountComponent();
  });

  afterEach(() => {
    if (wrapper && wrapper.exists()) {
      wrapper.destroy();
    }
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should contain password field', () => {
    expect(wrapper.get('[data-test="password-field"]').attributes('type')).toEqual('password');
  });

  describe('rules', () => {
    describe('when password has one letter', () => {
      beforeEach(async () => {
        await setPasswordTo('a');
      });

      it('should highlight one letter is satisfied', () => {
        expect(returnSatisfied(RULE.OneLetter)).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(returnSatisfied(RULE.OneNumber)).toBe(false);
      });
    });

    describe('when password has lower an upper letters', () => {
      beforeEach(async () => {
        await setPasswordTo('aB');
      });

      it('should highlight one letter is satisfied', () => {
        expect(returnSatisfied(RULE.OneLetter)).toBe(true);
      });
      it('should highlight upper and lower letter is satisfied', () => {
        expect(returnSatisfied(RULE.UpperAndLower)).toBe(true);
      });
      it('should not highlight number satisfied', () => {
        expect(returnSatisfied(RULE.OneNumber)).toBe(false);
      });
    });
  });


  describe('strength validation', () => {
    it('should be rendered', () => {
      expect(wrapper.find('[data-test="password-strength"]').exists()).toBeTruthy();
    });

    describe('when less than 5 rules satisfied', () => {
      const examples = ['', 'aaa', 'aB$4'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is weak`, async () => {
          await setPasswordTo(password);

          expect(wrapper.get('[data-test="password-strength"]').text()).toEqual('Weak');
        });
      });
    });

    describe('when more at least 5 rules satisfied', () => {
      const examples = ['aB$41', '1234567891233Rademade', '1234567Av$'];

      examples.forEach((password) => {
        it(`should show that password "${password}" is strong`, async () => {
          await setPasswordTo(password);

          expect(wrapper.get('[data-test="password-strength"]').text()).toEqual('Strong');
        });
      });
    });
  });
});
