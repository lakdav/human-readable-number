function toReadable(number) {
    let from_0_to_19 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let from_20_to_90 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    const addHundred = (n) => {
        return `${from_0_to_19[n]} hundred`;
    };
    const getLastWord = (n) => {
        return from_0_to_19[n] === "zero" ? "" : from_0_to_19[n];
    };

    const str = number.toString();
    if (number in from_0_to_19) {
        return from_0_to_19[number];
    }
    if (number > 19 && number < 100) {
        if (str[0] in from_20_to_90 && str[1] === 0) {
            return from_20_to_90[str[0]];
        } else {
            return `${from_20_to_90[str[0]]} ${getLastWord([str[1]])}`.trim();
        }
    } else {
        const str_to_Arr = str.split("");
        const last_to_chars = str_to_Arr.slice(1).join("");

        let result = `${addHundred(str[0])}`;

        const _xx = parseInt(last_to_chars);

        if (_xx in from_0_to_19) {
            return `${result} ${getLastWord(_xx)}`.trim();
        }

        if (_xx in from_20_to_90) {
            return `${result} ${from_0_to_19[_xx]}`;
        }
        if (str[2] === "0") {
            return `${result} ${from_20_to_90[str[1]]}`;
        }
        return `${result} ${from_20_to_90[str[1]]} ${from_0_to_19[str[2]]}`;
    }
}

module.exports = toReadable;
