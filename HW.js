
let arr = [
  { id: 51, name: 'John', age: 30 },
  { id: 13, name: 'Alice', age: 35 },
  { id: 20, name: 'Jane', age: 25 }
];

let first= "Hi, my name is ";
let second= " I'm ";
let third= " year's old";
// age1 = arr[0].age
// age2 = arr[1].age
// age3 = arr[2].age

let arrAge = [age1,age2,age3];

// console.log(typeof arr[0]);

arrAge.sort((arr[0],arr[1]) => arr[1].id-arr[0].id);

for(let obj in arr){
	if(arr[obj].age=arrAge[obj]){
		console.log(first + arr[obj].name + second + arr[obj].age + third)
	}	
}