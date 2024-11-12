const navbar = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const shop = document.getElementById('shop');
const keranjang = document.querySelector('.keranjang')

shop.addEventListener('click', () => {
//   alert('masuk');
keranjang.classList.toggle('active');

});
menu.addEventListener('click', () => {
    // alert('masukk');
    navbar.classList.toggle('active');
});

const kdgp = document.getElementById('kdgp');
const kdgse = document.getElementById('kdgse');
const kdgs = document.getElementById('kdgs');

// Pashmina
kdgp.addEventListener('click', () => {

    shop.style.color = 'red';
    // document.querySelector('#pashimgp').style.opacity = '1';
    const pash = document.getElementById('pash').innerHTML;
    const pricepash = document.querySelector('.pash #pas span').innerHTML;
    
    const createImg = document.createElement('img');
    createImg.src = 'assets/img/pashmina.png';
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('belanja');
    
    const createDiv2 = document.createElement('div');
    createDiv2.classList.add('kanan');
    
    const createp = document.createElement('p');
    createp.classList.add('nama');
    const textp = document.createTextNode(pash);
    createp.appendChild(textp); 
    
    const createp2 = document.createElement('p');
    createp2.classList.add('bayar');
    const textp2 = document.createTextNode(`Rp. ${pricepash}`);
    createp2.appendChild(textp2);
    createDiv.appendChild(createImg);
    createDiv.appendChild(createDiv2);
    createDiv2.appendChild(createp);
    createDiv2.appendChild(createp2);
    
    const beli = document.getElementById('beli');
    keranjang.insertBefore(createDiv, beli);
});


// Segitiga
kdgse.addEventListener('click', () =>{
    shop.style.color = 'red';
    const segi = document.getElementById('segi').innerHTML;
    const pricese = document.querySelector('.segi #seg span').innerHTML;
    const createImg = document.createElement('img');
    createImg.src = 'assets/img/segi.png';
    const createDiv = document.createElement('div');
    const beli = document.getElementById('beli');
    const createDiv2 = document.createElement('div');
    const creatp = document.createElement('p');
    const creatp2 = document.createElement('p');
    const textp = document.createTextNode(`${segi}`);
    const textp2 = document.createTextNode(`${`Rp. ${pricese}`}`);
    
    creatp.appendChild(textp);
    creatp2.appendChild(textp2);
    
    createDiv.classList.add('belanja');
    createDiv.appendChild(createImg);
    createDiv2.classList.add('kanan');
    creatp.classList.add('nama');
    creatp2.classList.add('bayar');
    
    
    createDiv.appendChild(createDiv2);
    createDiv2.appendChild(creatp)
    createDiv2.appendChild(creatp2)
    const hapus = document.createElement('a');
    
    const icon = feather.icons['trash-2'].toSvg();
    hapus.innerHTML = icon;
    createDiv.appendChild(hapus);
    
    // keranjang.appendChild(createDiv);
    
    keranjang.insertBefore(createDiv, beli);
    
});

// sport
kdgs.addEventListener('click', () => {
    // Mengubah warna teks elemen shop menjadi merah
    shop.style.color = 'red';
    
    // Mengambil nilai dari elemen dengan id 'sport' dan harga dari kelas .sport #spt span
    const sport = document.getElementById('sport').innerHTML;
    const pricesp = document.querySelector('.sport #spt span').innerHTML;
    
    // Membuat elemen gambar baru
    const createImg = document.createElement('img');
    createImg.src = 'assets/img/sport.png';  // Menentukan sumber gambar
    
    // Membuat elemen div dan p baru
    const createDiv = document.createElement('div');
    const createDiv2 = document.createElement('div');
    const creatp = document.createElement('p');
    const creatp2 = document.createElement('p');
    
    // Membuat teks baru untuk nama produk dan harga
    const textp = document.createTextNode(sport);
    const textp2 = document.createTextNode(`Rp. ${pricesp}`);
    
    // Membuat elemen span untuk harga
    // const spanSport = document.createElement('span');
    // const rp = document.createTextNode('Rp. ');  // Menambahkan teks "Rp."
    
    // Menyusun elemen-elemen
    creatp.appendChild(textp);
    createDiv.classList.add('belanja');  // Menambahkan kelas 'belanja' ke div utama
    createDiv2.classList.add('kanan');   // Menambahkan kelas 'kanan' ke div kanan
    creatp.classList.add('nama');        // Menambahkan kelas 'nama' ke p nama produk
    creatp2.classList.add('bayar');      // Menambahkan kelas 'bayar' ke p harga
    
    // Menambahkan elemen ke dalam struktur div
    // spanSport.appendChild(rp);            // Menambahkan "Rp." ke spanSport
    // creatp2.appendChild(spanSport);       // Menambahkan spanSport ke dalam creatp2
    creatp2.appendChild(textp2);          // Menambahkan harga ke creatp2
    
    createDiv.appendChild(createImg);     // Menambahkan gambar ke dalam createDiv
    createDiv.appendChild(createDiv2);    // Menambahkan createDiv2 ke dalam createDiv
    createDiv2.appendChild(creatp);       // Menambahkan nama produk ke createDiv2
    createDiv2.appendChild(creatp2);      // Menambahkan harga produk ke createDiv2
    
    // Menyisipkan elemen baru ke dalam keranjang sebelum elemen dengan id 'beli'
    keranjang.insertBefore(createDiv, beli);
});
// const trash = document.querySelector('.belanja a');

// trash.addEventListener('click', () =>{
//       createDiv.style.display = 'none';
// });

beli.addEventListener('click', () => {
    const form = document.getElementById('form');
    const pash = document.getElementById('pash').innerHTML;
    const pricepash = document.querySelector('.pash #pas span').innerHTML;
    const segi = document.getElementById('segi').innerHTML;
    const pricese = document.querySelector('.segi #seg span').innerHTML;
    const sport = document.getElementById('sport').innerHTML;
    const pricesp = document.querySelector('.sport #spt span').innerHTML;
    
    
    const barang = document.getElementById('barang');
    const harga = document.getElementById('harga');
    
    const namaList = document.querySelectorAll('.nama');
    const bayarList = document.querySelectorAll('.bayar');
    
    // Pastikan elemen ada di dalam NodeList sebelum mengakses innerHTML
    const nama = Array.from(namaList).map(item => item.innerHTML).join(", "); // Gabungkan dengan koma jika ada lebih dari satu
    const bayar = Array.from(bayarList).map(item => item.innerHTML).join(", "); // Gabungkan dengan koma jika ada lebih dari satu
    
    form.style.opacity = '1';
    form.style.transform = 'scale(1)';
    barang.value = nama; // Atau gabungkan dengan format lain sesuai kebutuhan
    harga.value = `${bayar}`; // Format nilai bayar
    
    // if(nama === document.querySelector("#pash").innerHTML)
    //     {
    //         form.style.opacity = '1';
    //         form.style.transform = 'scale(1)'
    //         barang.value = `${pash}`
    //         harga.value = `Rp. ${pricepash}`
    //     }
    //     else if(nama === document.querySelector("#segi").innerHTML)
    //         {
    //             form.style.opacity = '1';
    //             form.style.transform = 'scale(1)';
    //             barang.value = `${segi}`;
    //             harga.value = `Rp. ${pricese}`;
    //         }
    //         else if(nama === document.querySelector("#sport").innerHTML)
    //             {
    //                 form.style.opacity = '1';
    //                 form.style.transform = 'scale(1)';
    //                 barang.value = `${sport}`;
    //                 harga.value = `Rp. ${pricesp}`;
    //             }
    //             else{
    //     alert("kamu belum belanja");
    // }
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxfoTQZpDpBscfnrrkrJzmlHX6wW-Qp8Lbx-WFMGrzfRgWwW3vQkToyZqvHx7X2uqLf-A/exec'
  const form = document.forms['submit-to-google-sheet']
  
  form.addEventListener('submit', e => {
      document.querySelector('#spin').style.display = 'inline-block';
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          form.style.opacity = '0';
          form.style.transform = 'scale(0)'
          done.style.opacity = '1'
          done.style.transform = 'scale(1)'
        }
    )
    .catch(error => 
        console.error('Error!', error.message)
    )
});
const belanja = document.querySelector('.keranjang .belanja');  // Mengambil semua elemen dengan kelas 'belanja'
const doneButton = document.querySelector('#selesai');  // Mengambil tombol dengan id 'selesai'
const done = document.querySelector('.done');
  
doneButton.addEventListener('click', () => {
    // Mencegah refresh halaman jika ada event default (misalnya jika tombolnya adalah link)
    event.preventDefault();
    
    // Lakukan perubahan pada elemen jika perlu
    done.style.opacity = '0';
    done.style.transform = 'scale(0)';
    
    // Refresh halaman
    location.reload();  // Memuat ulang halaman saat ini
  });
  
