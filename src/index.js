module.exports = function toReadable(number) {
    let toReadString;

    let readString;

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
        stringdigit = "twenty";
        break;
      case "3":
        stringdigit = "thirty";
        break;
      case "4":
        stringdigit = "forty";
        break;
      case "5":
        stringdigit = "fifty";
        break;
      case "6":
        stringdigit = "sixty";
        break;
      case "7":
        stringdigit = "seventy";
        break;
      case "8":
        stringdigit = "eighty";
        break;
      case "9":
        stringdigit = "ninety";
        break;
      default:
        break;
    }

    return stringdigit;
  }

  function nameHundred(hundred) {
    return nameDigit(hundred) + " hundred";
  }

  let numberArray = number.toString().split("");

  if (numberArray.length === 1) {
    return nameDigit(number);
  }

  if (number >= 10 && number < 20) {
    return nameNumbersUntilTwenty(number);
  }

  if (number >= 20 && number < 100) {
    for (let i = numberArray.length; i < 0; i--) {}
    return nameNumbersUntilTwenty(number);
  }

  /*   toReadString = nameDigit(number); */
  toReadString = nameHundred(number);
  return toReadString;
};
