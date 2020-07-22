export default function (password) {
  let passedRules = [];

  const passwordAsArray = password.split('');

  if (!password.length) return passedRules;

  // Check if password has length > 4
  if (password.length > 4) {
    passedRules = [...passedRules, 'LongerThan4'];
  }

  // Check if password has length > 8
  if (password.length > 8) {
    passedRules = [...passedRules, 'LongerThan8'];
  }

  // Check if password has length > 12
  if (password.length > 12) {
    passedRules = [...passedRules, 'LongerThan12'];
  }

  // Check if password has at least one number
  if (passwordAsArray.some((el) => el.match(/^[0-9]+$/))) {
    passedRules = [...passedRules, 'OneNumber'];
  }

  // Check if password has at least one letter
  if (passwordAsArray.some((el) => el.match(/^[a-zA-Z]+$/))) {
    passedRules = [...passedRules, 'OneLetter'];
    // console.log('here is letter');
  }

  // Check if password has at least one lower and one upper case letter
  if (passwordAsArray.some((el) => el.match(/^[a-z]+$/)) && passwordAsArray.some((el) => el.match(/^[A-Z]+$/))) {
    passedRules = [...passedRules, 'UpperAndLower'];
  }

  // Check if password has at least one special character
  if (passwordAsArray.some((el) => !el.match(/^[0-9a-zA-Z]+$/))) {
    passedRules = [...passedRules, 'SpecialSymbol'];
  }

  return passedRules;
}
