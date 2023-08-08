//membuat object
//object literal
var mhs1 ={
	nama : 'rahma aisyah',
	nrp : '0202898349',
	email :'rahmaaisyah@gmail.com',
	jurusan : 'rekayasa perangkat lunak'

    }

var mhs2 ={
	nama : 'rahma aulya',
	nrp : '0434284539',
	email :'rahmaaulya@gmail.com',
	jurusan : 'teknik komputer jaringan'
		
	}

// function declaration
function buatObjectMahasiswa(nama,nrp,email,jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('muhammad ilham','0332340289','ilham@gmail.com','teknik mesin');


// contruktor 
function Mahasiswa(nama,nrp,email,jurusan) {

	//var this =();
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
    //return this;
}

var mhs4 =  Mahasiswa ('dea','0990869864','dea@gmail.com,rekayasa perangkat lunak');








