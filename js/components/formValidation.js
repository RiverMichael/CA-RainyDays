/**
 * Validates if an input is a valid email adress or displays an error message
 * @param {*} input Where the input is happening
 * @param {*} value The value of the input
 * @param {*} errorMessage The container of the error message
 * @returns true or false
 * @example
 * const email = documentquerySelector("#form#email");
 * const emailError = document.querySelector("#emailerror");
 *
 * validateEmail(email, email.value, emailError);
 */
export function validateEmail(input, value, errorMessage) {
  const regEx = /\S+@\S+\.\S+/;
  const result = regEx.test(value);

  if (result) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    input.style.border = "2px solid var(--clr-error)";
  }
  return result;
}

/**
 * Validates the minimum length of an input
 * @param {*} value The input to validate
 * @param {*} length The minimum length required
 * @returns true or false
 * @example
 * const name = document.querySelector("#form#name");
 * validateMinLength(name.value, 3);
 */
export function validateMinLength(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

/**
 * Validates the exact length of an input
 * @param {*} value The value to validate
 * @param {*} length The length required
 * @returns true or false
 * @example
 * const cardNumber = document.querySelector("#form#cardnumber");
 * validateLength(cardNumber.value, 16);
 */
export function validateLength(value, length) {
  if (value.trim().length === length) {
    return true;
  } else {
    return false;
  }
}
