//for...of
//array
//const mhs = ['Dea','Putri','Ananda'];

//for(let i=0; i< mhs.length; i++){
//	console.log(mhs[i]);
//}

//mhs.forEach(m => console.log(m));

//for(const m of mhs){
//	console.log(m);
//}

//String
//const nama ='Dea';
//for(const n of nama){
//	console.log(n);
//}


//const mhs = ['Dea','Putri','Ananda'];
//mhs.forEach((m,i) => {
//	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
//});

//for (const[i,m] of mhs.entries()){
//	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
//}

//NodeList
//const liNama = document.querySelectorAll('.nama');
//liNama.forEach(n => console.log(n.textContent));
//for(n of liNama){
//	console.log(n.innerHTML);
//}

//arguments
//function jumlahkanAngka(){
//return [1,2,3,4,5].reduce((a,i) => a + i);
//arguments.forEach(a => jumlah += a);
//let jumlah = 0;
//for(a of arguments){
//	jumlah += a;
//}
//return jumlah;
//}
//console.log(jumlahkanAngka(1,2,3,4,5));

//for...in
const mhs = {
	nama: 'Dea',
	umur: 17,
	email:'deadinda@unpas.ac.id'
}
for(m in mhs){
	console.log(mhs[m]);
}