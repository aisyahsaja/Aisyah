var penumpang =['aisyah',undefined,'aulya'];
var tambahPenumpang = function (namaPenumpang = Penumpang) {
	//jika angkot kosong 
	if (penumpang.length == 1 ){
		//tambah penumpang di awal array
		penumpang .push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang ;
	}else{
		// telusuri semua kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			// jika ada kursi kosong 
			if (penumpang [i] == undefined){
				// tambah penumpang dikursi tersebut
				penumpang [i] == namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if (penumpang[i]  == namaPenumpang) {
				//tampilkan pesan kesalahanya 
				console.log (namaPenumpang + 'sudah ada didalam angkot.')
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			//jika seluruh kursi terisi
			else if ( i == penumpang.length - 1){
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
		}
	}

	var hapusPenumpang = function(namaPenumpang,penumpang) {
		if (penumpang.length == 0) {
			console.log('angkot masih kosong.');
		}else{
			for (var i = 0; i < penumpang.length; i++){
				if (penumpang[i] == namaPenumpang }{
					penumpang[i] == undefined;
				}else if(i == penumpang.length - 1) {
					console.log(namaPenumpang +'tidak ada didalam')
				}
			}
		}
		return penumpang;
	}