//manipulasi array

//1.menambah isi array

//var arr = [];

//arr[0] = "rahma ";
//arr [1] = "aisyah";
//arr[2] ="aulya";
//arr[6]="rahmi";

//console.log(arr);

// 2.menghapus isi array 

//var arr = ["rahma","aisyah","aulya"];
//varr[1]  = underfined;
//console.log (arr);

//3. menampilkan isi array
//var arr = ["rahmi","aisyah","aulya"];

//for (var i = 0; i < arr.length; i++){
//	console.log('mahasiswa ke-' + (i+1) + ' :' + arr[i]);
//}

//method pada array
//1. join
//console.log (arr.join(' - '));

//2.push & pop 
//arr.push ('ilham','mira');
//arr.pop();
// arr.pop();
//console. log (arr.join('-'));

//3.unshift & shift 
// arr.unshift ('ilham');
//arr.shift();
//console.log(arr.join('-'));


//4.splice(indexAwal, mauDihapusBerapa, elemenBaru2, ...)
//arr.splice( 1 ,2 ,' ilham', 'mira');
//console.log(arr.join('-'));

//5.slice
// slice (awal,akhir);
//var arr = ['rahma','aisyah','aulya','ilham','mira'];
//var arr2 = arr.slice(1,4);
//console.log(arr.join('-'));
//console.log(arr2.join('-'));

//6.foreach
var angka =[1,2,3,4,5,6,7,8];
var nama  = ['rahma','aisyah','aulya'];
//for (var i = 0; < angka.length; i++) {
//console.log(angka[i]);
//});

//nama.forEach(function(e,i) {
//console.log ('mahasiswa ke-' + (i+1) + 'adalah : ' + e);
//})

//7.map
//var angka = [1,2,5,3,6,8,4,7];
//var angka2 = angka.map(function(e) {
//	return e * 2;
//});
//console.log(angka2.join(' - '));

//8.sort 
 //var angka =[1,2,12,3,4,5,6,7,11,8,10];
 //angka.sort(function(a,b){
 //	return a-b;
 //});
 //console.log(angka.join('-'));

//9. filter & find
var angka =[1,2,12,3,4,5,6,7,11,8,10];
var angka2 =angka.filter (function(x){
	return x > 5;
});
console.log(angka2);