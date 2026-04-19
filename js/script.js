//Celsius to Fahrenheit | °C to °F
//Task-1:

let tmp=20;
let frn=0;
function clsToFht(){
    frn=(tmp*9/5)+32
}
clsToFht();
console.log("Temp is "+frn +" F");




//Task-2:
let x =25;
let ar=[5,6,11,12,98,5];
let y=0;

for (const i of ar){
    if (x == i) {
        y=y+1;
    }
}
console.log(y);


//Task 3


function countVowels(word) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i of word) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello qoesdsdashfhfdb"));


function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// Example
let sentence = "I am learning Programming to become a programmer";
console.log(findLongestWord(sentence)); // Programming


//Task 5
let num = Math.floor(Math.random() * 11) + 10;
console.log(num);


//task 6
const heights2 = [167, 190, 120, 165, 137];

let lowest = heights2[0];

for (let i = 1; i < heights2.length; i++) {
    if (heights2[i] < lowest) {
        lowest = heights2[i];
    }
}

console.log(lowest); // 120


///Task 7
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallest = friends[0];

for (let i = 1; i < friends.length; i++) {
    if (friends[i].length < smallest.length) {
        smallest = friends[i];
    }
}

console.log(smallest); // ron


///task8

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total =
        (laptop * laptopPrice) +
        (tablet * tabletPrice) +
        (mobile * mobilePrice);

    return total;
}

// Example:
console.log(calculateElectronicsBudget(1, 1, 1)); // 70000


//Task 10

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
   ];
   
   function findAveragePhonePrice(phones) {
       let total = 0;
   
       for (let phone of phones) {
           total += phone.price;
       }
   
       return total / phones.length;
   }
   
   console.log(findAveragePhonePrice(phones));


   //task 10
   const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
   ];
   
   function totalMonthlySalary(employees) {
       let totalMonthly = 0;
   
       for (let emp of employees) {
           const yearlySalary = emp.starting + (emp.experience * emp.increment);
           const monthlySalary = yearlySalary / 12;
           totalMonthly += monthlySalary;
       }
   
       return totalMonthly;
   }
   
   console.log(totalMonthlySalary(employees));