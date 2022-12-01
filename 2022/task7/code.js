const main_products = document.querySelector('.main_products');
const main_view = document.querySelector('.main_view');
const main_view_box = document.querySelector('.main_view_box');

let products = [
	{
		id: 0,
		name_product: 'Mars',
		price_product: 90,
		img_src: 'mars.png',
		count: 0		
	},
	{
		id: 1,
		name_product: 'Twix',
		price_product: 95,
		img_src: 'twix.png',		
		count: 0
	},
	{
		id: 2,
		name_product: 'Snickers',
		price_product: 100,
		img_src: 'snickers.png',	
		count: 0	
	}
];
let cart = [];

function itemProduct(product) {
	return `<div class="main_products_item" draggable='true' ondragstart=setDraggedIndex(${product.id})>
		<p>${product.name_product}</p>
		<p>${product.price_product}</p>
		<img src="images/${product.img_src}">
		<button onclick="addProduct(${product.id})">Add product</button>
	</div>`;
}

function allProducts(products) {
	main_products.innerHTML = '<h2 class="main_products_item_title">Products</h2>';

	for (item of products){
		main_products.innerHTML += itemProduct(item);
	}
}

function itemCart(product) {
	return `<div class="main_view_box_item" draggable='true' ondragstart=setDraggedIndex(${product.id})>
		<p>${product.name_product}</p>
		<p>${product.price_product}</p>
		<img src="images/${product.img_src}">
		<p>${product.count}</p>
		<button onclick="addProduct(${product.id})">Add product</button>
		<button onclick="deleteProduct(${product.id})">Remove product</button>
	</div>`;
}

function statusCart(pricer, countr) {
	return `<div class="statusCart">
		<p>Количество продуктов: ${countr}</p>
		<p>Общая цена: ${pricer}</p>
	</div>`;
}

function allCart(cart) {
	// main_view.innerHTML = '';
	main_view_box.innerHTML = '';

	if (cart.length != 0)
	{
		for (item of cart){
				main_view_box.innerHTML += itemCart(item);
		}
	}

	let countProducts = 0;
	let priceProdust = 0;

	if (cart.length != 0)
	{
		for (item of cart){
				countProducts = countProducts + item.count;
				priceProdust = priceProdust + item.price_product * item.count;
		}
	}

	main_view_box.innerHTML += statusCart(priceProdust, countProducts);
}

function addProduct(id) {
	let cartItem = products[id];
	cartItem.count++;
	cart.push(cartItem);
	let tempCart = new Set(cart);
   cart = Array.from(tempCart);

	allCart(cart);
}

function deleteProduct(id){
	let cartItem = products[id];
	cartItem.count--;
	cart.push(cartItem);
	let tempCart = new Set(cart);
	cart = Array.from(tempCart);

	for (let i = 0; i < cart.length; i++)
	{
		if(cart[i].count == 0)
		{
			cart.splice(i, 1);
		}
	}

	allCart(cart);
}

let draggedIndex = 0;

const setDraggedIndex = (index) => {
	draggedIndex = index;
}

main_products.addEventListener('dragstart', (evt)=> {
	
});

main_products.addEventListener('dragend', (evt)=> {
	
});

main_view_box.addEventListener('dragover', (evt)=> {
	evt.preventDefault();
});

main_view_box.addEventListener('drop', (evt)=> {
	evt.preventDefault();
	addProduct(draggedIndex);
});

main_products.addEventListener('dragover', (evt)=> {
	evt.preventDefault();
});

main_products.addEventListener('drop', (evt)=> {
	evt.preventDefault();
	deleteProduct(draggedIndex);
});
document.body.addEventListener('load', allProducts(products) );