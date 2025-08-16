const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

let studentHighScore = students.filter(i => i.score > 50);
// console.log(studentHighScore)
let studentAddScore = studentHighScore.map(i => i.score * 1.1);
// console.log(studentAddScore)
let sumHighScore = studentAddScore.reduce((acc,cur) => acc + cur).toFixed(1);
console.log(`"Total score is ${sumHighScore}"`)