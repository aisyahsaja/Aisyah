//Cara untuk mmebuat object pada javascript
//1.object literal
//PROBLEM : tidak efektif untuk object yang banyak
//let mahasiswa1 = {
//nama: 'Dea',
//energi: 10,
//makan: function(porsi) {
//this.energi = this.energi + porsi;
//console.log(`Hallo  ${this.nama}, selamat makan!`);
//}
//}
//let mahasiswa2 = {
//nama: 'Dinda',
//energi: 20,
//makan: function(porsi) {
//this.energi = this.energi + porsi;
//console.log(`Hallo  ${this.nama}, selamat makan!`);
//}
//}


//2.Function declaration
//const methodMahasiswa = {
//makan : function (porsi){
//  this.energi += porsi;
//console.log(`Hallo  ${this.nama}, selamat makan!`);

//},
//main : function(jam){
//  this.energi -= jam;
//console.log(`Hallo  ${this.nama}, selamat bermain!`);
//},
//tidur : function(jam){
//this.energi += jam * 2;
//console.log(`Hallo  ${this.nama}, selamat tidur!`);
//}
//};

//function Mahasiswa(nama,energi) {
//let mahasiswa = Object.create(methodMahasiswa) ;
//mahasiswa.nama = nama;
//mahasiswa.energi = energi;
  

//return mahasiswa;
//}
//let Dea = Mahasiswa('Dea',10);
//let Dinda = Mahasiswa('Dinda',20);

//function Mahasiswa(nama,energi) {
//this.nama = nama;
//this.energi = energi;
//}

//Mahasiswa.prototype.makan = function(porsi){
//this.energi += porsi;
//return`Halo ${this.nama},selamat makan!`;
//}

//Mahasiswa.prototype.main = function(jam){
//this.energi -= jam;
//return `Halo ${this.nama},selamat bermain!`;
//}

//Mahasiswa.prototype.tidur = function(jam){
//this.energi += jam * 2;
//return `Halo ${this.nama},selamat tidur!`;
//}

//let Dea = new Mahasiswa('Dea',10);

//versi class
//class Mahasiswa {
//constructor(nama,energi) {
//this.nama = nama;
//this.energi = energi;
//}
//makan (porsi){
//this.energi += porsi;
//return`Halo ${this.nama},selamat makan!`;
//}

//main (jam){
//this.energi -= jam;
//return `Halo ${this.nama},selamat bermain!`;
//}

//tidur (jam){
//this.energi += jam * 2;
//return `Halo ${this.nama},selamat tidur!`;
//}
//}
//let Dea = new Mahasiswa('Dea',10);
//let Dinda = new Mahasiswa('Dinda',20);

let angka = 1;
//console.log(angka);


//3.constructor function
//keyword new
//function Mahasiswa(nama,energi) {
//let mahasiswa = {};
//this.nama = nama;
//this.energi = energi;

//this.makan = function (porsi){
//  this.energi += porsi;
// console.log(`Hallo  ${this.nama}, selamat makan!`);
//}
//this.main = function(jam){
//this.energi -= jam;
//console.log(`Hallo  ${this.nama}, selamat bermain!`);
//}
//}
//let Dea = new Mahasiswa('Dea',10);
//let Dinda = new Mahasiswa('Dinda',20);

//4.object.create
