// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newarr = arr.map((x) => x*2);
// console.log(newarr);

// let newarr1 = arr.filter((x) => x%2==0);
// console.log(newarr1);

// let newarr2 = arr.filter((x) => x%2!=0).map((x) => x*3);
// console.log(newarr2);

// let newarr2 = arr.reduce((x,y) => x+y,0);
// console.log(newarr2);

// let newarr2 = arr.filter((x) => x%2==0).map((x) => x*4).reduce((x,y) => x+y , 0);
// console.log(newarr2);


const students = [
{ name : "Alice", score:50 },
{ name : "Bob", score:65 },
{ name : "Charlie", score:80 },
{ name : "David", score:45 },
];

let newa = students.filter((students) => students.score>60).map((students)=> students.score*2).reduce((x,y) => x+y,0) ;
console.log(newa);





