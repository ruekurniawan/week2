function balikKata(kata)
{	
	var tampung="";
	var kata2 = kata.length;
	for (var i = 0; i < kata2; i++){
		tampung= kata[i] + tampung;
	}
	return tampung;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

