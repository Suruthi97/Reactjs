//username 
export function userNameValidation(input){
  return /^[A-za-z].{3,15}$/.test(input);
}
//about
export function aboutValidation(input){
  return /^[A-za-z].{3,50}$/.test(input);
}
//Thilagam
export function firstNameValidation(input){
  return /^[A-za-z].{3,15}$/.test(input);
}
//Kannan
export function lastNameValidation(input){
  return /^[A-Za-z].{3,15}$/.test(input);
}
//thilagam@gmail.com
export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}
//street
export function streetValidation(input){
  return /^[A-za-z].{3,15}$/.test(input);
}
//city
export function cityValidation(input){
  return /^[A-za-z].{3,15}$/.test(input);
}
//state
export function stateValidation(input){
  return /^[A-za-z].{3,15}$/.test(input);
}
//postal
export function postalValidation(input){
  return /^[0-9].{0,6}$/.test(input);
}