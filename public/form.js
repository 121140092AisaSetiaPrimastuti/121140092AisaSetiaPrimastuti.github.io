// Mendapatkan elemen form
const productForm = document.getElementById('productForm');

// Event listener untuk form submission
productForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah halaman mengirimkan permintaan (refresh)

    // Mengambil data dari form
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const discountPercentage = document.getElementById('discountPercentage').value;
    const rating = document.getElementById('rating').value;
    const stock = document.getElementById('stock').value;
    const brand = document.getElementById('brand').value;
    const category = document.getElementById('category').value;
    const thumbnail = document.getElementById('thumbnail').value;

    // Membuat objek produk dari data form
    const product = {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail
    };

    // Menyimpan produk ke local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));
    // Reset form
    productForm.reset();

    // Anda bisa memberikan feedback kepada pengguna bahwa data telah berhasil disimpan, misalnya dengan menampilkan pesan.
});
