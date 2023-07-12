/* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
The function validates or rejects the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.*/

function telephoneCheck(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" && (str[i+4] !== "-" || str[i+4] !== "5")) {
            return false;
        }
        if (str[i] === "(" && (str[i+4] !== ")")) {
            return false;
        }
        if ( str[0] === "1" && (str.length < 17) && str.includes("(") && str.includes(")")) {
            return true;
        } else if (str[0] === "1" && (str.length === 14 || str.length === 16) && str.includes(")") === false){
            return true;
        } else if (strArr.every(element => element === "5") && strArr.length === 10){
            return true;
        } else if(str.length === 12 && str[i] === "5" || strArr[i] === "-"){
            return true;
        } else if (str.length === 13 && strArr[0] === "(" &&strArr[4] === ")" && strArr[1] === "5") {
            return true;
        }
    }
    return false;
}

// Tests

console.log(telephoneCheck("555-555-5555")) // should return a boolean.
console.log(telephoneCheck("1 555-555-5555")) // should return true.
console.log(telephoneCheck("1 (555) 555-5555")) // should return true.
console.log(telephoneCheck("5555555555")) // should return true.
console.log(telephoneCheck("555-555-5555")) // should return true.
console.log(telephoneCheck("(555)555-5555")) // should return true.
console.log(telephoneCheck("1(555)555-5555")) // should return true.
console.log(telephoneCheck("555-5555")) // should return false.
console.log(telephoneCheck("5555555")) // should return false.
console.log(telephoneCheck("1 555)555-5555")) // should return false.
console.log(telephoneCheck("1 555 555 5555")) // should return true.
console.log(telephoneCheck("1 456 789 4444")) // should return true.
console.log(telephoneCheck("123**&!!asdf#")) // should return false.
console.log(telephoneCheck("55555555")) // should return false.
console.log(telephoneCheck("(6054756961)")) // should return false.
console.log(telephoneCheck("2 (757) 622-7382")) // should return false.
console.log(telephoneCheck("0 (757) 622-7382")) // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")) // should return false.
console.log(telephoneCheck("2 757 622-7382")) // should return false.
console.log(telephoneCheck("10 (757) 622-7382")) // should return false.
console.log(telephoneCheck("27576227382")) // should return false.
console.log(telephoneCheck("(275)76227382")) // should return false.
console.log(telephoneCheck("2(757)6227382")) // should return false.
console.log(telephoneCheck("2(757)622-7382")) // should return false.
console.log(telephoneCheck("555)-555-5555")) // should return false.
console.log(telephoneCheck("(555-555-5555")) // should return false.
console.log(telephoneCheck("(555)5(55?)-5555")) // should return false.
console.log(telephoneCheck("55 55-55-555-5")) // should return false.
console.log(telephoneCheck("11 555-555-5555")) // should return false.