let fruits: string[]=['apple','orange','banana'];
for(var index in fruits){
	console.log(fruits[index]);//tsc arrays.ts..output:apple orange banana
}
for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);//node arrays.js.. o/p:apple orange banana
}