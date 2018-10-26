//Soal 1
var plus = 0;
console.log("Looping Pertama");
while (plus < 20){
	plus=plus+2;
	console.log(plus + " I Love Coding");
}
console.log("Looping Kedua");
var min = 20;
while(min > 0){
	console.log(min + " I will become fullstack developer");	
	min=min-2;
}
console.log();
//Soal 2
var plus = 0;
console.log("Looping Pertama");
for (plus=plus+1; plus <= 20; plus++){
	console.log(plus + " I Love Coding");

}
console.log("Looping Kedua");
var min = 20;
for (min; min > 0; min--){
	console.log(min + " I will become fullstack developer");
}
console.log();
//Soal 3
var plus;
for (plus= 1; plus <= 100; plus++){
	if (plus%2) {
		console.log("Ganjil")
	}
	else console.log("Genap");
}
//penambahan 2
for (plus= 1; plus <= 100; plus=plus+2){
	if (plus%3 === 0) {
		console.log(plus+ " Kelipatan 3");
	}
}

//penambahan 5
for (plus= 1; plus <= 100; plus=plus+5){
	if (plus%6 === 0) {
		console.log(plus+ " Kelipatan 6");
	}
}

//penambahan 9
for (plus= 1; plus <= 100; plus=plus+9){
	if (plus%10 === 0) {
		console.log(plus+ " Kelipatan 10");
	}
}