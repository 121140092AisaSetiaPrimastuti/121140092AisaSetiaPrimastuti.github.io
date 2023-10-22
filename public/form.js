
const productForm = document.getElementById('productForm');


productForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

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


    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));
    productForm.reset();

    
});
