import { ProductHttpService } from "./services/produc-http.service";
(async () => {


 const productService = new ProductHttpService();

 // productService.create({
 //  title: 'Iphone 16',
 //  price: 1000,
 //  description: 'lorem impsum',
 //  categoryId: 11,
 //  images: []
 // });

 const products = await productService.all();

 console.log(products.length);
 console.log(products.map(item => item.price));

 // actualiza el producto
 const productId = products[0].id;
 productService.update(productId, {
  title: 'Iphone 20',
  price: 3600000,
 })

 const product = await productService.find(productId);
 console.log(product);
 
})();