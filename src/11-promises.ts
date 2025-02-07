import axios from "axios";

(async () => {

 const sleep = async (delay: number) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
 };
 await sleep(1000);

 function getProducts () {
  return axios.get('https://api.escuelajs.co/api/v1/products');
 };

 async function getProductsAsync() {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
 };

 console.log('----'.repeat(10));

 const products = await getProducts();
 console.log('productos: ', products.data);

 const productsAsync = await getProductsAsync();
 console.log('productos async: ', productsAsync);





})();