/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher
the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O
and so on.

The function  takes a ROT13 encoded string as input and returns a decoded string.

All letters are uppercase. Non-alphabetic characters (i.e. spaces, punctuation), have been passed.*/

function rot13(str) {
    const strArr = []
    const strRegex = /\W|_/g;

    for (let i = 0; i < str.length; i++){
        const cipher = 13;
        let newChar = str.charCodeAt(i) - cipher;
        let newStr = String.fromCharCode(newChar);
        if (newChar >= 65 && !strRegex.test(str[i])) {
            strArr.push(newStr);
        } else if (newChar < 65 && !strRegex.test(str[i])){
            let otherChar = 90 - (64 - newChar); // 90 is the charCode of Z
            newStr = String.fromCharCode(otherChar);
            strArr.push(newStr);
        } else {
            strArr.push(str[i]);
        }
    }
    return strArr.join("");
}
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));