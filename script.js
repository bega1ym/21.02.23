let exampel = document.querySelector("article");
console.log(exampel);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";
example2.style.color = "tomato"
example2.style.fontSize = "12px"
console.log(example2);

let example3 = document.querySelector(".example3");
example3.textContent = "Kyrgyzstan";
example3.style.backgroundColor = "blue"
example3.style.fontSize = "22px"
console.log(example3);

let example4 = document.querySelector("#example4");
example4.textContent = "Karakol";
console.log(example4);

let example5 = document.querySelector("p:nth-child(4)");

console.log(example5);
example5.textContent = "IT-Akadem";
