// this 
var a = 10;
console.log(window.a);
// membuat object

// cara 1- function declaration
//function halo(){
	//console.log(this);
	//console.log('halo');
//}
 //this.halo();


// cara 2 - object literal
//var obj= {};
//obj.halo = function (){
//	console.log(this);
//	console.log('halo');
//}
//obj.halo();

//cara 3- contructor
function Halo(){
	console.log(this);
	console.log('halo');
}
var obj = new Halo();
var obj = new Halo();
//this mengembbalikan object yang baru dibuat 
