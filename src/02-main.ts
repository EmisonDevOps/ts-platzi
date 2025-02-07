import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
 title: 'Iphone 16',
 price: 1000,
 description: 'lorem impsum',
 categoryId: 11,
 images: []
});

const products = productService.all();
const product = products[0];

console.log(product);
console.log('---'.repeat(10),product.id);

productService.update(product.id, {
 title: 'bla bla bla'
});
const productInfo = productService.find(product.id);
console.log(productInfo);


