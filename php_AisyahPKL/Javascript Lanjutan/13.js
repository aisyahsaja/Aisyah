//1.HTML Fragments
//const mhs = {
//	nama : 'Dea Dinda',
//	umur : 17,
//	nrp : '043040023',
//	email : 'DeaDinda@unpas.ac.id'
//};

//const el =`<div class ="mhs">
//<h2> ${mhs.nama} </h2>
//<span class ="nrp"> ${mhs.nrp}</span>
//</div>`;

//2.Looping
//const mhs = [
//{
//	nama : 'Dea Dinda',
//	email : 'deadinda@unpas.ac.id'
//},
//{
//	nama : 'Putri',
//	email : 'putri@unpas.ac.id'
//},
//{
//	nama : 'Ananda',
//	email : 'ananda@unpas.ac.id'
//},

//];

//const el = `<div class="mhs">
//${mhs.map(m => `<ul>
//	<li> ${m.nama} </li>
//	<li> ${m.email} </li>
//	</ul>`).join('')}
//	</div>`;

//3.Conditionals
//ternary
//const lagu = {
//	judul : 'Kau Adalah',
//	penyanyi : 'Isyana Sarasvati',
//	feat : 'Rayi Putra '
//}

//const el = `<div class="lagu">
//<ul>
//<li> ${lagu.penyanyi} </li>
//<li> ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
//</ul>
//</div>`;

//4.Nested
//HTML Fragments bersarang
const mhs = {
	nama : 'Dea Dinda',
	semester : 5, 
	mataKuliah : [
	'Rekayasa Web',
	'Analisis dan Perancangan Sistem Informasi',
	'Pemrograman Sistem Interaktif',
	'Perancangan Sistem Berorientasi object'
		]
};

function cetakMataKuliah(mataKuliah) {
	return `
	<ol>
	${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
	</ol>
	`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class ="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;