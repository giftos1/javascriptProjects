/*The function converts a given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Roman numerals	Arabic numerals
M	            1000
CM	            900
D	            500
CD	            400
C	            100
XC	            90
L	            50
XL	            40
X	            10
IX	            9
V	            5
IV	            4
I	            1
*/

function convertToRoman(num) {
    let romanEquivalents = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    if (num === 0) {
        return '';
    }
    for (let i = 0; i < romanEquivalents.length; i++) {
        if (num >= romanEquivalents[i][0]) {
            return romanEquivalents[i][1] + convertToRoman(num - romanEquivalents[i][0]);
        }
    }
}

console.log(convertToRoman(36));