Vue.createApp({
	data() {
		return {
			artikel: [],
			judul_artikel: "Artikel",
			article: null,
			navbar: {
				heading: "Portofolio",
				k: "Komik",
				c: "Contact",
				t: "Tabel Keterampilan",
				a: "Artikel"
			},
			heading: {
				deskripsi: "Halo!! saya Muhammad Fiandra Badia Mahasiswa Universitas Ahmad dahlan",
				nim: "NIM 2000016132",
				prodi: "Prodi Sistem Informasi"
			},
			sosmed: [
				{
					a: "https://github.com/fiandra99/tekweb2022",
					src: "./img/github.png"
				},
				{
					a: "mailto:fiandrabadia@gmai.com",
					src: "./img/gmail.png"
				},
				{
					a: "https://instagram.com/fiandrabadia?igshid=YmMyMTA2M2Y=",
					src: "./img/ig.png"
				},
				{
					a: "https://api.whatsapp.com/send?phone=081934654304&text=Assalamualaikum",
					src: "./img/wa2.png"
				}
			],
			tabel_keterampilan: {
				judul: "Tabel Ketrampilan",
				nama: ["NO", "KEAHLIAN", "SKILL"],
				list: [
					{
						"keahlian": "C++",
						"skill": "Advance",
					},
					{
						"keahlian": "HTML",
						"skill": "Advance",
					},
					{
						"keahlian": "Javascript",
						"skill": "interediatte",
					},
					{
						"keahlian": "Python",
						"skill": "intermediatte",
					},
					{
						"keahlian": "Microsoft Word",
						"skill": "Intermediatte",
					},
					{
						"keahlian": "CSS",
						"skill": "Intermediatte",
					}
				]
			},

			kontak: {
				judul: "Contact",
				alamat: "Alamat",
				a_desc: "JL. jeruk Ds. Gulun MAospati MAgetan",
				email: "Email",
				e_desc: "fiandrabbadia@gmail.com",
				telp: "Telp/Hp",
				t_desc: "0819-3465-4304"
			},

			komik: {
				judul: "Spoiler KOMIK",
				list_komik: [
					{
						i: "./img/op1049.png",
						ket: "one piece chapter 1049"
					},
					{
						i: "./img/HXH391.webp",
						ket: "Hunter x Hunter Chapter391"
					},
					{
						i: "./img/DBS.jpg",
						ket: "Dragon Ball Chapter 73"
					},
					{
						i: "./img/bnha-318.jpg",
						ket: "My Hero academya chapter 318"
					}
				]
			}





		};
	},
	methods: {
		getArticle() {
			axios
				.get(
					"https://raw.githubusercontent.com/fiandra99/tekweb2022/master/artikel/artikel.json"
				)
				.then((res) => {
					console.log(res.data); //melihat respon data pada console browser
					this.artikel = res.data; //memperbarui variabel article pada bagian data()
				})
				.catch((error) => {
					console.log(error); //melihat error jika pengambilan data adalah gagal
				});
		},
		getDataMarkdown() {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const article = urlParams.get('article');
			var converter = new showdown.Converter();
			console.log(article);
			axios
				.get(
					"https://raw.githubusercontent.com/fiandra99/tekweb2022/master/artikel/" + article
				)
				.then((res) => {
					var html = converter.makeHtml(res.data);
					this.article = html;
					console.log(html);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	beforeMount() {
		this.getArticle(),
		this.getDataMarkdown()
	},
}).mount("#app");




const txtElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {

	if (count == txtElement.length) {
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length == currentTxt.length) {
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();
