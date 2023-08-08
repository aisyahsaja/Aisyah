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

let mahasiswa = ['Dea Dinda','Putri', 'Ananda'];

//let jumlahHuruf = mahasiswa.map(function(nama){
//	return nama.length;
//});

//console.log(jumlahHuruf);

//let jumlahHuruf = mahasiswa.map(nama => nama.length);
//console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map (nama => ({nama: nama,jmlHuruf:
nama.length}));
console.table(jumlahHuruf);