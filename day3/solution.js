// with for
let display = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let result = String(i * j).padStart(3, " ");
    display += result + " ";
  }
  display += `\n`;
}
console.log(display);

// with while   
let table = "";
let row = 1;
while (row <= 10) {
  let col = 1;
  while (col <= 10) {
    let result = String(row * col).padStart(3, " "); 
    table += result + " ";
    col++;
  }
  table += "\n";
  row++;
}

console.log(table);