//Destructuring Variable/Assignment

//Destructuring Array
//const perkenalan = ['Halo','nama','saya','Dea Dinda'];

//const [salam,satu,dua,nama] = perkenalan;

//skipping items
//const[salam, , ,nama] = perkenalan;
//console.log(nama);


//swap items
//let a = 1;
//let b = 2;
//console.log(a);
//console.log(b);
//[a,b] = [b,a];
//console.log(a);
//console.log(b);

//return value pada function
//function coba(){
//	return [1,2];
//}
//const [a,b] = coba();
//console.log(b);

//Rest parameter
//const [a,...values] = [1,2,3,4,5];
//console.log(a);
//console.log(values);

//Destructuring Object
//const mhs ={
//	nama : 'Dea Dinda',
//	umur : 17
//}

//const{nama,umur} = mhs;
//console.log(nama);

//Assignment tanpadeklarasi object
//({nama,umur} = {nama:'Dea Dinda',umur:17});
//console.log(nama);

//Assignment ke variabel baru
//const mhs ={
//	nama : 'Dea Dinda',
//	umur : 17
//}

//const{nama:n,umur:u} = mhs;
//console.log(u);

//Memberikan Default Value
//const mhs ={
//	nama :'Dea Dinda',
//	umur : 17,
//	email : 'deadinda@unpas.ac.id'
//}

//const{nama,umur,email='email@default.com'} = mhs;
//console.log(email);

//Memberi nilai default + assignment ke variabel baru
//const mhs ={
//	nama :'Dea Dinda',
//	umur : 17,
//	email : 'deadinda@unpas.ac.id'
//}

//const{nama:n,umur:u,email:e='email@default.com'} = mhs;
//console.log(e);

//Rest Parameter
//const mhs ={
//	nama :'Dea Dinda',
//	umur : 17,
//	email : 'deadinda@unpas.ac.id'
//}

//const{nama,...value} = mhs;
//console.log(value);

//Mengambil field pada object,setelah dikirim sebagai parameter untuk function
const mhs ={
	id : 123,
	nama :'Dea Dinda',
	umur : 17,
	email : 'deadinda@unpas.ac.id'
}

function getIdMhs(mhs){
  return mhs.id;
}
console.log(getIdMhs(mhs));
