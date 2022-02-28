const output = document.getElementById("output");
const numeri = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
  numeri[i] = parseInt(prompt(`numero ${i}`));
}

for (let i = 0; i < numeri.length; i++) {
  sum += numeri[i];
}

output.innerHTML = sum;
