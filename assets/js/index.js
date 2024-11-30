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
    const hapus = document.createElement('a');
    hapus.classList.add('del');
    
    const icon = feather.icons['trash-2'].toSvg();
    hapus.innerHTML = icon;
    createDiv.appendChild(hapus);
    
    
    const beli = document.getElementById('beli');
    keranjang.insertBefore(createDiv, beli);
    
    hapus.addEventListener('click', (e) => {
        const divToRemove = e.target.closest('.belanja');
        setTimeout(() =>{
            divToRemove.remove();
        }, 1000)
    });
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
    hapus.classList.add('del');
    
    const icon = feather.icons['trash-2'].toSvg();
    hapus.innerHTML = icon;
    createDiv.appendChild(hapus);
    
    // keranjang.appendChild(createDiv);
    
    keranjang.insertBefore(createDiv, beli);
    
    hapus.addEventListener('click', (e) => {
        const divToRemove = e.target.closest('.belanja');
        setTimeout(() =>{
            divToRemove.remove();
        }, 1000)
    });
    
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
    
    
    const textp = document.createTextNode(sport);
    const textp2 = document.createTextNode(`Rp. ${pricesp}`);
    
    
    
    
    
    
    creatp.appendChild(textp);
    createDiv.classList.add('belanja');  
    createDiv2.classList.add('kanan');   
    creatp.classList.add('nama');        
    creatp2.classList.add('bayar');      
    
    
    
    
    creatp2.appendChild(textp2);          
    
    createDiv.appendChild(createImg);     
    createDiv.appendChild(createDiv2);   
    createDiv2.appendChild(creatp);      
    createDiv2.appendChild(creatp2);     
    const hapus = document.createElement('a');
    hapus.classList.add('del');
    
    const icon = feather.icons['trash-2'].toSvg();
    hapus.innerHTML = icon;

    createDiv.appendChild(hapus);
    
    
    // Menyisipkan elemen baru ke dalam keranjang sebelum elemen dengan id 'beli'
    keranjang.insertBefore(createDiv, beli);
    hapus.addEventListener('click', (e) => {
        const divToRemove = e.target.closest('.belanja');

    setTimeout(() =>{
        divToRemove.remove();
    }, 1000)
    });
    
});;

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
    
// Check if the class 'belanja' exists in the DOM
if (document.querySelector('.belanja') === null) {
    // If 'belanja' class is not found, show an alert
    alert('Keranjang Belanja Kosong');
} else {
    form.style.opacity = '1';
    form.style.transform = 'scale(1)';
    barang.value = nama; // Atau gabungkan dengan format lain sesuai kebutuhan
    harga.value = `${bayar}`; // Format nilai bayar
}



});

// const beliPas = document.getElementById('pas');
// const beliSeg = document.getElementById('seg');
// const beliSpt = document.getElementById('spt');
// const liveBuy = [beliPas, beliSeg, beliSpt];

// liveBuy.addEventListener('click', () =>{
//     if(liveBuy[0]){
//     form.style.opacity = '1';
//     form.style.transform = 'scale(1)';
//     }
//     else{
//         alert('eror')
//     }
// })
// FOrm kirim pesanan
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxfoTQZpDpBscfnrrkrJzmlHX6wW-Qp8Lbx-WFMGrzfRgWwW3vQkToyZqvHx7X2uqLf-A/exec'
  const form = document.forms['submit-to-google-sheet']
  const pesan = document.getElementById('pesan');

  
  pesan.addEventListener('click', () => {
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

// Tombol Batal
const batal = document.getElementById('batal');

batal.addEventListener('click', () =>{
             form.style.opacity = '0';
          form.style.transform = 'scale(0)'
})

// Tombol pesanan selesai
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
  
