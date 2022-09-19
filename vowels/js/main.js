// var a = ['a','e','i','o','u'];

// function Vowels(vowels) {
    
//     let count = 0;
//     if (vowels.includes('a','e','i','o','u')) {
//         count++;
//     }
//     return count;

// }

// var vowels = prompt('enter a string');

// var b = Vowels(vowels);
// console.log(b);

var vowels = prompt('enter a string');
var length = vowels.length;
console.log(length);
let count = 0;
for (let i = 0; i < length; i++) {
    
    if (vowels[i]=='a' || vowels[i]=='e' || vowels[i]=='i' || vowels[i]=='o' || vowels[i]=='u') {
        count++;
    }
}
console.log(count);


var num;
var a;

function Reverse(num) {
    if (num=='0') {
        a = 'Zero';
    }
    else if (num=='1') {
        a = 'One';
    }
    else if (num=='2') {
        a = 'Two';
    }
    else if (num=='3') {
        a = 'Three';
    }
    else if (num=='4') {
        a = 'Four';
    }
    else if (num=='5') {
        a = 'Five';
    }
    else if (num=='6') {
        a = 'Six';
    }
    else if (num=='7') {
        a = 'Seven';
    }
    else if (num=='8') {
        a = 'Eight';
    }
    else if (num=='9') {
        a = 'Nine';
    }
    return a;
}

var innum = prompt('enter the number');
var rev = 0;
var l = innum.length;

while (l!=0) {
    rem = innum%10;
    rev = Reverse(rem);
    b=rev;
    innum = (innum-rem)/10;
    l--;
    console.log(b)
}

var num1 = prompt("Enter the number")
var sum = 0;
var rem1 = 0;

while (num1) {
    rem1 = num1%10;
    sum = sum+rem1;
    num1 = (num1-rem1)/10
}
console.log(sum);
