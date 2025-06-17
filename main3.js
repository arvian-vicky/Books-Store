document.querySelectorAll('.btnDetail').forEach (item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi yang tersedia</i>';
              


        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const numberPhone = '6285781879570';
        let message = "https://api.whatsapp.com/send?phone=6285781879570&text=Hallo%20Admin%2C%20Boleh%20saya%20tahu%20tentang%20produk%20ini%3F"; 

        document.querySelector('.btnBeli').href = message;

    });
});