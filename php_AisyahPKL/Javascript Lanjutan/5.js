//function init(){
	//let nama = 'Dea';
//	return function (nama){
//		console.log(nama);
//	}

//}
//let panggilNama = init();
//panggilNama('Dea');
//panggilNama('Dinda');

//function ucapkanSalam(waktu){
//	return function(nama){
//		console.log(`Halo ${nama},selamat ${waktu},semoga harimu menyenangkan!`);

//	}
//}
//let selamatPagi = ucapkanSalam('Pagi');
//let selamatSiang = ucapkanSalam('Siang');
//let selamatMalam = ucapkanSalam('Malam');

//console.dir(selamatMalam('Dea'));

let add = (function (){
let counter = 0;
	return function(){
		return++counter;
}
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());