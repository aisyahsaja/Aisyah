//Cara untuk mmebuat object pada javascript
//1.object literal
let mahasiswa1 = {
  nama: 'Dea',
  energi: 10,
  makan: function(porsi) {
   this.energi = this.energi + porsi;
   console.log(`Hallo  ${this.nama}, selamat makan!`);
  }
}
let mahasiswa2 = {
  nama: 'Dinda',
  energi: 20,
  makan: function(porsi) {
   this.energi = this.energi + porsi;
   console.log(`Hallo  ${this.nama}, selamat makan!`);
  }
}


//2.Function declaration
//function Mahasiswa(nama,energi) {
//	let mahasiswa = {};
//	mahasiswa.nama = nama;
//	mahasiswa.energi = energi;
//
//	mahasiswa.makan = function (porsi){
//    this.energi += porsi;
//  console.log(`Hallo  ${this.nama}, selamat makan!`);
//}
//mahasiswa.main = function(jam){
//	this.energi -= jam;
//	console.log(`Hallo  ${this.nama}, selamat bermain!`);
//}

//return mahasiswa;
//}
//let Dea = Mahasiswa('Dea',10);
//let Dinda = Mahasiswa('Dinda',20);

//3.constructor function
//keyword new
function Mahasiswa(nama,energi) {
	let mahasiswa = {};
	this.nama = nama;
	this.energi = energi;

	this.makan = function (porsi){
      this.energi += porsi;
      console.log(`Hallo  ${this.nama}, selamat makan!`);
	}
    this.main = function(jam){
    	this.energi -= jam;
    	console.log(`Hallo  ${this.nama}, selamat bermain!`);
    }
}
let Dea = new Mahasiswa('Dea',10);
let Dinda = new Mahasiswa('Dinda',20);

//4.object.create
