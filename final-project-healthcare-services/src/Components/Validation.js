export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}
export function passwordValidation(input){
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-`~_]).{6,30}$/.test(input);
}
export function nameValidation(input){
    return /^[A-Za-z]+$/.test(input);
}
export function phoneValidation(input){
    return /^(7|8|9){1}[0-9]{9}$/.test(input);
}