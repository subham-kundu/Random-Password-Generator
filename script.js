const passwordBox = document.getElementById("password")
const passLen = 10

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const specialChar = "~!@#$%^&*()_+{}[]+-/><"

const allChar = upperCase + lowerCase + numbers + specialChar

function generatePassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialChar[Math.floor(Math.random() * specialChar.length)]
    while (passLen>password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}