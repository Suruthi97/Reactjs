export function emailValidation(input) {
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}

export function firstNameValidation(input) {
    return /^[A-Za-z]{3,15}$/.test(input);
}

export function lastNameValidation(input) {
    return /^[A-Za-z].{3,15}$/.test(input);
}