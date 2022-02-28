const output = document.getElementById("output");
const numeri = [];
const numeriDispari = [];

for (let i = 0; i < 6; i++) {
  numeri[i] = parseInt(prompt(`numero ${i}?`));

  if (numeri[i] % 2 !== 0) {
    numeriDispari.push(numeri[i]);
  }
}

output.innerHTML = numeriDispari.join(", ");
