module.exports = function toReadable(number) {
    let readString;
    let numberString = number.toString();

    function nameDigit(digit) {
        let stringdigit;
        switch (digit) {
            case "0":
                stringdigit = "zero";
                break;
            case "1":
                stringdigit = "one";
                break;
            case "2":
                stringdigit = "two";
                break;
            case "3":
                stringdigit = "three";
                break;
            case "4":
                stringdigit = "four";
                break;
            case "5":
                stringdigit = "five";
                break;
            case "6":
                stringdigit = "six";
                break;
            case "7":
                stringdigit = "seven";
                break;
            case "8":
                stringdigit = "eight";
                break;
            case "9":
                stringdigit = "nine";
                break;

            default:
                break;
        }

        return stringdigit;
    }

    function nameNumbersUntilTwenty(number) {
        let stringNumber;
        switch (number) {
            case "10":
                stringNumber = "ten";
                break;
            case "11":
                stringNumber = "eleven";
                break;
            case "12":
                stringNumber = "twelve";
                break;
            case "13":
                stringNumber = "thirteen";
                break;
            case "14":
                stringNumber = "fourteen";
                break;
            case "15":
                stringNumber = "fifteen";
                break;
            case "16":
                stringNumber = "sixteen";
                break;
            case "17":
                stringNumber = "seventeen";
                break;
            case "18":
                stringNumber = "eighteen";
                break;
            case "19":
                stringNumber = "nineteen";
                break;

            default:
                break;
        }

        return stringNumber;
    }

    function nameNumbersDozens(number) {
        let stringnumber;
        switch (number) {
            case "2":
                stringnumber = "twenty";
                break;
            case "3":
                stringnumber = "thirty";
                break;
            case "4":
                stringnumber = "forty";
                break;
            case "5":
                stringnumber = "fifty";
                break;
            case "6":
                stringnumber = "sixty";
                break;
            case "7":
                stringnumber = "seventy";
                break;
            case "8":
                stringnumber = "eighty";
                break;
            case "9":
                stringnumber = "ninety";
                break;
            default:
                break;
        }

        return stringnumber;
    }

    function nameHundred(hundred) {
        return nameDigit(hundred) + " hundred";
    }
    if (numberString.length === 1) {
        return nameDigit(numberString);
    }

    if (number >= 10 && number < 20) {
        return nameNumbersUntilTwenty(numberString);
    }

    if (number >= 20 && number < 100) {
        readString =
            +numberString.slice(1) === 0
                ? `${nameNumbersDozens(numberString[0])}`
                : `${nameNumbersDozens(numberString[0])} ${nameDigit(
                      numberString.slice(1)
                  )}`;
        return readString;
    }

    if (number >= 100 && number < 1000) {
        readString =
            +numberString.slice(1) === 0
                ? `${nameHundred(numberString[0])}`
                : `${nameHundred(numberString[0])} ${toReadable(
                      parseInt(numberString.slice(1), 10).toString()
                  )}`;
        return readString;
    }

    return readString;
};
