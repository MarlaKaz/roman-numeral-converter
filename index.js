function convertToRoman() {
    var x = document.getElementById("myTextArea").value; 
    var romanNum = [];
    while (x !== 0) {
        if (x >= 1000) {
            romanNum.push("M");
            x -= 1000;
        } else if (x >= 900) {
            romanNum.push("CM");
            x -= 900;
        } else if (x >= 500) {
            romanNum.push("D");
            x -= 500;
        } else if (x >= 400) {
            romanNum.push("CD");
            x -= 400;
        } else if (x >= 100) {
            romanNum.push("C");
            x -= 100;
        } else if (x >= 90) {
            romanNum.push("XC");
            x -= 90;
        } else if (x >= 50) {
            romanNum.push("L");
            x -= 50;
        } else if (x >= 40) {
            romanNum.push("XL");
            x -= 40;
        } else if (x >= 10) {
            romanNum.push("X");
            x -= 10;
        } else if (x >= 9) {
            romanNum.push("IX");
            x -= 9;
        } else if (x >= 5) {
            romanNum.push("V");
            x -= 5;
        } else if (x >= 4) {
            romanNum.push("IV");
            x -= 4;
        } else if (x >= 1) {
            romanNum.push("I");
            x -= 1;
        }
        x;
    };
    document.getElementById("demo").innerHTML = romanNum.join("");
   };
   
   
   //convertToRoman(36);