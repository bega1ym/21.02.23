let exampel = document.querySelector("article");
console.log(exampel);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";
example2.style.color = "tomato";
example2.style.fontSize = "12px";
console.log(example2);

let example3 = document.querySelector(".example3");
example3.textContent = "Kyrgyzstan";
example3.style.backgroundColor = "blue";
example3.style.fontSize = "22px";
console.log(example3);

let example4 = document.querySelector("#example4");
example4.textContent = "Karakol";
console.log(example4);

let example5 = document.querySelector("p:nth-child(4)");

console.log(example5);
example5.textContent = "IT-Akadem";

let example6 = document.querySelectorAll("article p");
for (let i = 0; i < example6.length; i++) {
  let paragraph = example6[i];
  paragraph.textContent += "👩‍💻🍕🍟";
}

let example7 = document.createElement("p");
console.log((example7.textContent = " Lorem ipsum 🐼"));
document.body.append(example7); // prepend вставляет в начало
example7.style.fontSize = "22px";
example7.style.backgroundColor = "gray";

let example8 = document.createElement("ul");
console.log(example8);
document.body.append(example8);
