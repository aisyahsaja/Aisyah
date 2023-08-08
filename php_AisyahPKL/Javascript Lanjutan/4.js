//2.1 EXECUTION CONTEX,HOISTING & SCOPE

//var nama = 'Dea';
//console.log(nama);

//create phase pada Global Context
//nama var = undefined
//nama function = fn()
//hoisting
//window = global object
//this = window

//execution phase

//console.log(sayHello());

//var nama = 'Dea';
//var umur = 17;

//function sayHello(){
//	return`Halo,nama saya $(nama),saya $(umur) tahun.`;
//}

//function membuat local Execution Context
//yang di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting

//var nama = ' Dea Dinda';
//var username = '@deadinda';

//function cetakURL(){
//	var instagramURL = 'http://instagram.com/';
//	return instagramURL + username;
//}

//console.log(cetakURL('putri' ,'ananda'));

//function a () {
//	console.log('ini a');

//	function b () {
//		console.log('ini b');

//		function c () {
//		console.log('ini c');

//       }
//     c();

//}
//b();
//}
//a();

function satu(){
	var nama = 'Dea';
	console.log(nama);
}
function dua(){
	console.log(nama);
}
console.log(nama);
var nama = 'ananda';
satu();
dua('putri');
console.log(nama);
