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