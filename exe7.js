//Soal 1
var rows1=5;
for (var i = 0; i < 5; i++) {
	console.log("*")
}
console.log();

//Soal 2
var row2=5;
for (var i = 0; i < row2; i++) 
{	
	var bintang="";
	for (var j = 0; j < row2; j++) 
	{
		bintang= bintang +"*"
	}
	console.log(bintang);
}
console.log();
//Soal 3
var rows3=5;
for (var i = 0; i < rows3; i++) 
{	var bintang = "";
	for (var j = 0; j <= i; j++)
	{
		bintang= bintang + "*";			
	}	
	console.log(bintang);
}


