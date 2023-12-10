question1 = document.querySelectorAll(".question1");
const openAnswer = function () {
  let answer1 = this.nextElementSibling;
  if (answer1.classList.contains("hidden")) {
    answer1.classList.remove("hidden");
  } else {
    answer1.classList.add("hidden");
  }
};

for (let i = 0; i < question1.length; i++) {
  question1[i].addEventListener("click", openAnswer);
}

const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const heart = document.querySelector(".heartrate");
const button = document.querySelector("#button");
const div = document.querySelector(".description");
const p = document.querySelector("#description");
const BMI = document.querySelector(".BMI");
const blood = document.querySelector(".blood");
const ai_button = document.querySelector("#ai_button");
const tagline = document.querySelector("#journey");
const login = document.querySelector("#login");
login.addEventListener("click", function () {
  window.location.href = "login.html";
});
tagline.addEventListener("click", function () {
  window.location.href = "#physical";
});
ai_button.addEventListener("click", function () {
  window.location.href = "https://chat.openai.com/";
});
const heartRate = function (age) {
  if (age > 12) {
    heart.textContent = " Normal HeartRate is " + "60-100bpm";
  } else if (age > 6 && age <= 12) {
    heart.textContent = " Normal HeartRate is " + "75-110bpm";
  } else if (age >= 2 && age <= 6) {
    heart.textContent = " Normal HeartRate is " + "75-120bpm";
  }
};
const bmi = function (a, b) {
  const c = parseInt(b / (a * a));
  console.log(c);
  if (c < 18.5) {
    BMI.textContent = `Your BMI is ${c} :You are Underweight`;
  } else if (c > 18.5 && c < 24.9) {
    BMI.textContent = `Your BMI is ${c} :You are at normal range`;
  } else if (c > 24.9 && c < 29.9) {
    BMI.textContent = `Your BMI is ${c} :You are OverWeight Suggested Go to GYM`;
  } else {
    BMI.textContent = `Your BMI is ${c} :You are Obese Go to GYM`;
  }
};
const bp = function (age) {
  if (age >= 60 && age <= 64) {
    blood.textContent = "Normal BP is 87-134";
  } else if (age >= 55 && age <= 59) {
    blood.textContent = "Normal BP is 86-131";
  } else if (age >= 50 && age <= 54) {
    blood.textContent = "Normal BP is 85-129";
  } else if (age >= 45 && age <= 49) {
    blood.textContent = "Normal BP is 84-127";
  } else if (age >= 40 && age <= 44) {
    blood.textContent = "Normal BP is 83-125";
  } else if (age >= 35 && age <= 39) {
    blood.textContent = "Normal BP is 82-123";
  } else if (age >= 30 && age <= 34) {
    blood.textContent = "Normal BP is 81-122";
  } else if (age >= 25 && age <= 29) {
    blood.textContent = "Normal BP is 80-121";
  } else if (age >= 20 && age <= 24) {
    blood.textContent = "Normal BP is 79-121";
  } else if (age >= 14 && age <= 19) {
    blood.textContent = "Normal BP is 77-117";
  } else if (age >= 6 && age <= 13) {
    blood.textContent = "Normal BP is 70-105";
  }
};
const value = function () {
  if (age.value <= 0 || height.value <= 0 || weight.value <= 0) {
    alert("incorrect inputs!");
  } else {
    heartRate(parseInt(age.value));
    div.classList.remove("hidden");
    p.remove();
    bmi(parseInt(height.value) / 100, parseInt(weight.value));
    bp(parseInt(age.value));
  }
};
button.addEventListener("click", value);
let stars = document.getElementsByClassName("fa-star");
console.log(stars);
let emoji = document.getElementById("emoji");

stars[0].addEventListener("click", function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#e4e4e4";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(0)";
});

stars[1].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#e4e4e4";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-100PX)";
};

stars[2].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#e4e4e4";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-200px)";
};

stars[3].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#e4e4e4";
  emoji.style.transform = "translateX(-300px)";
};

stars[4].onclick = function () {
  stars[0].style.color = "#ffd93b";
  stars[1].style.color = "#ffd93b";
  stars[2].style.color = "#ffd93b";
  stars[3].style.color = "#ffd93b";
  stars[4].style.color = "#ffd93b";
  emoji.style.transform = "translateX(-400px)";
};
// const heightinput = document.getElementById("height");
// const weightinput = document.getElementById("weight");
// const agetinput = document.getElementById("age");
// const button = document.getElementById("button");
// const BMI = document.getElementById("bmi");
// const description = document.getElementById("description");
// let array = [];

// //fetching input value
// //coverting string value into number
// //getting float number into one decimal place
// //printing the result and description
// function value() {
//   if (
//     heightinput.value <= 0 ||
//     weightinput.value <= 0 ||
//     agetinput.value <= 0
//   ) {
//     alert("The given values are not defined");
//     heightinput.value = "";
//     weightinput.value = "";
//     agetinput.value = "";
//   } else {
//     array.push(heightinput.value, weightinput.value, ageinput.value);
//     heightinput.value = "";
//     weightinput.value = "";
//     agetinput.value = "";
//     bmi(array[0], array[1], array[2]);
//     array = [];
//   }
// }
// function bmi(a, b, d) {
//   a = parseFloat(a);
//   b = parseFloat(b);
//   a = a / 100;
//   let result = b / (a * a);
//   console.log(result);
//   values(result, d);
//   BMI.innerText = Math.round(result * 10) / 10;
// }
// function values(c, age) {
//   console.log(c);
// if (c < 18.5) {
//   description.innerText = "You are Underweight";
// } else if (c > 18.5 && c < 24.9) {
//   description.innerText = "You are at normal range";
// } else if (c > 24.9 && c < 29.9) {
//   description.innerText = "You are OverWeight Suggested Go to GYM";
// } else {
//   description.innerText = "You are Obese Go to GYM";
// }
// }
// button.addEventListener("click", value);
