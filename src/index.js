module.exports = function toReadable (number) {
  num = number.toString().split("");
  let words = {
      "0": "zero",
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve",
      "13": "thirteen",
      "14": "fourteen",
      "15": "fifteen",
      "16": "sixteen",
      "17": "seventeen",
      "18": "eighteen",
      "19": "nineteen",
      "20": "twenty",
      "30": "thirty",
      "40": "forty",
      "50": "fifty",
      "60": "sixty",
      "70": "seventy",
      "80": "eighty",
      "90": "ninety",
      "100": "hundred",
      "1000": "thousand",
      "1000000": "million"
  }

  function tillHundred(num){
      if (num.join("") === "00"){
          return "";
      }
      let number = +num.join("");
      if(number<=20){
          return (words[number])
      } else if (number<100){
          if(num[1]==="0"){
              return words[num[0]+"0"];
          } else {
              return words[num[0]+"0"] + " " + words[num[1]];
          }
     }
  }
  if(number<100){
      return tillHundred(num);
  }
  let a = num.splice(1, 2);
return (words[num[0]] + " " + words["100"] + " " + tillHundred(a)).trim();
}
