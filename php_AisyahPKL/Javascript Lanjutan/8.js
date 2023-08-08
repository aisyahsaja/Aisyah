//function Expression
//const tampilNama = function (nama) {
//	return `Halo,${nama}`;
//}
//console.log(tampilNama('Dea'));

//const tampilNama = (nama) => {return `Halo,${nama}`;}
//console.log('Putri');

//const tampilNama = (nama,waktu) => {
//	return '`selamat ${waktu},${nama}';
//}
//console.log(tampilNama('Ananda','Malam'));

//implisit return
//const tampilNama = (nama) => `Halo,${nama}`;
//console.log('Putri');

//const tampilNama = () =>`Hello World!`;
//console.log(tampilNama());

//let mahasiswa = ['Dea Dinda','Putri', 'Ananda'];

//let jumlahHuruf = mahasiswa.map(function(nama){
//	return nama.length;
//});

//console.log(jumlahHuruf);

//let jumlahHuruf = mahasiswa.map(nama => nama.length);
//console.log(jumlahHuruf);

//let jumlahHuruf = mahasiswa.map (nama => ({nama: nama,jmlHuruf:
//nama.length}));
//console.table(jumlahHuruf);

//konsep this pada Arrow Function

//Constructor Function

//const Mahasiswa = function(){
//	this.nama = 'Dea';
//	this.umur = 17;
//  this.sayHello = function(){
//	console.log (`Halo,nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//}
//}

//const Dea = new Mahasiswa ();

//Arrow Function

//const Mahasiswa = function(){
//	this.nama = 'Dea';
//	this.umur = 17;
//  this.sayHello = () => {
//	console.log (`Halo,nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//}
//}

//const Dea = new Mahasiswa ();

//Object Literal

//const mhs1 ={
//	nama : 'Dea',
//	umur : 17,
//	sayHello : () => {
//		//console.log(`Halo,nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//	console.log(this);
//	}
//}


//const Mahasiswa = function(){
//	this.nama = 'Dea';
//	this.umur = 17;
//  this.sayHello = function(){
//	console.log (`Halo,nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//}

//setInterval( () => {
//	console.log(this.umur++);
//},500);
//}

//const Dea = new Mahasiswa ();

const box = document.querySelector('.box');
box.addEventListener('click',function(){
	let satu = 'size';
	let dua ='caption';

	if(this.classList.contains(satu)){
		[satu,dua] = [dua,satu];
	}

	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
})

