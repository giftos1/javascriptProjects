/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher
the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O
and so on.

The function  takes a ROT13 encoded string as input and returns a decoded string.

All letters are uppercase. Non-alphabetic characters (i.e. spaces, punctuation), have been passed.*/

function rot13(str) {
    return str;
}
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));