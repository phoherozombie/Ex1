function validatePassword(password) {

    let isValidLength =password.length >=8 && password.length <=20;
    let isContainSpecialCharacter=  /[!@#$%^&*]/.test(password);
    let hasNoSpaces=!/\s/.test(password);
    return isValidLength && isContainSpecialCharacter&&hasNoSpaces;

    console.log(validatePassword("MyPassword!"));
    console.log(validatePassword("Short1"));
    console.log(validatePassword("Password with spaces!"));

}