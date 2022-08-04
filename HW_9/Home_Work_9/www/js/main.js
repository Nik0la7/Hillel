let furniture = [
	{
		type: 'desk',
		price: 27.87
	},
	{
		type: 'closet',
		price: 187.32
	},
	{
		type: 'chair',
		price: 79.29
	},
	{
		type: 'bed',
		price: 239.99
	}
];
let devices = [
	{
		type: 'desktop',
		price: [272, 769]
	},
	{
		type: 'laptop',
		price: [499, 1800]
	},
	{
		type: 'smartphone',
		price: [100, 800]
	},
	{
		type: 'tablet',
		price: [185, 1000]
	},
    {
		type: 'console',
		price: 889
	}
];
let appliances = [
	{
		type: 'oven',
		price: 780
	},
	{
		type: 'microwave',
		price: [50, 1400]
	},
	{
		type: 'mixer',
		price: 215.17
	}
];
function Product (category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = () => {
        return `<tr><td><img src="img/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
        <td><p>${this.type}</p></td>
        <td><p>${this.price} USD</p></td>
        </tr>`
    };
};
function findProduct(catName, arr) {
     arr.forEach(element => {
        const product =  new Product(catName, element.type, element.price);
        if (element.price.length > 1) {
            product.price = product.price.join(' - ');
            body.push(product.render());
        } else {
            body.push(product.render());
        };
    });
};

let body = [`<div class="productPage"><div class="page"><table>`];

findProduct('furniture', furniture);
findProduct('devices', devices);
findProduct('appliances', appliances);

body.push(`</table></div></div>`);
document.write(body.join(' '));