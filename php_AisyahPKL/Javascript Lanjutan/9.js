function kerjakanTugas(matakuliah,selesai){
	console.log(`Mulai mengerjakan ${matakuliah}...`);
	selesai();
}

function selesai(){
	alert('Selesai mengerjakan tugas!');
}

kerjakanTugas('Pemrograman Web',selesai);

setTimeout(function() {
	console.log('Hello World');
}, 1000)

function ucapkanSalam(waktu){
	return function (nama){
		console.log(`Halo ${nama},Selamat ${waktu},semoga harimu menyenangkan!`);
	}
}
let selamatMalam = ucapkanSalam('Malam');
console.dir(selamatMalam('Dea'));

let total =0,count =1;
while(count <= 10){
	total += count;
	count += 1;
}
console.log(total);

for(let i=0; i<10; i++){
	console.log(i);
}

function repeatLog(n){
	for (let i=0; i<n; i++){
		console.log(i);
	}
}
repeatLog(10);

function repeat(n,action){
	for (let i=0; i<10; i++){
		action(i);
	}
}
repeat(10,console.log);
repeat(3,alert);