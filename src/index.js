const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];
const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];
const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    if (number > 99) return `${ones[Math.floor(number / 100)]} hundred ${convertTens(number % 100)}`.trimRight();
    else return convertTens(number);
};

function convertTens(number) {
    if (number < 10) return ones[number];
    else if (number >= 10 && number < 20) return teens[number - 10];
    else return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`.trimRight();
}
