/*
	1. masukkan nama
	2. masukkan peran
	3. bila nama kosong 

	// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
*/

var nama = "Rudy";
var peran = "";
if (nama==="") {
	console.log("Nama harus diisi!");
}
else{
	if (peran === "Ksatria") 
	{
		console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " "+ nama + " kamu dapat menyerang dengan senjatamu!");
	}
	else if (peran === "Tabib") {
		console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " "+ nama + " kamu akan membantu temanmu yang terluka");
	}
	else if (peran === "Penyihir"){
		console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " "+ nama + " ciptakan keajaiban yang membantu kemenanganmu!");
	}
	else
	console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}