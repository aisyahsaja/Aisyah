var jmlAngkot = 10;

var angkotberoperasi = 6;

for(var NoAngkot = 1; NoAngkot <= jmlAngkot; NoAngkot++){

	if (NoAngkot<= 6 && NoAngkot !== 5){
      console.log('Angkot No. ' +NoAngkot+'beroperasi dengan baik.');

   }else if (NoAngkot === 8 || NoAngkot === 10 || NoAngkot === 5){

   console.log('Angkot No. ' +NoAngkot+' sedang lembur.');

   }else{

	console.log('Angkot No.'+NoAngkot+'sedang tidak beroperasi.');
   }
}