const container = document.getElementById('container');
const loader = document.getElementById('loader')

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
		const products = JSON.parse(xhr.responseText)
		console.log(products)
		loader.remove()
		displayProducts(products)
	}
}
xhr.open('GET', 'https://itireact-native-day3.vercel.app/products')
xhr.send()

function displayProducts(products) {
	for (const product of products) {
		const productContainer = document.createElement('div');
		productContainer.classList.add('product-container')

		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.images[1])
		productImg.addEventListener('mouseenter', (event) => {
			event.target.src = product.images[2]
		})
		productImg.addEventListener('mouseleave', (event) => {
			event.target.src = product.images[1]
		})
		productContainer.appendChild(productImg)

		const productTitle = document.createElement('a');
		productTitle.innerText = product.title
		productTitle.setAttribute('href', './details.html?id=' + product.id)
		productContainer.appendChild(productTitle)

		const price = document.createElement('h3');
		price.innerText = product.price
		productContainer.appendChild(price)

		container.appendChild(productContainer)

	}
}
