/**
 * Created by Bazu-05 on 16.08.2020.
 */
const leastOneLetterRegex = /[a-zA-Z]+/;
const upperAndLowerRegex = /[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/;
const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const numberRegex = /[0-9]/;

export {
  leastOneLetterRegex,
  upperAndLowerRegex,
  specialCharsRegex,
  numberRegex,
}
