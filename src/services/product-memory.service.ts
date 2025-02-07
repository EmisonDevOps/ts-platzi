import { faker } from '@faker-js/faker';

import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';

export class ProductMemoryService {

 private products: Product[] = [];

 create(data: CreateProductDto): Product {
  const newProduct = {
   ...data,
   id: faker.number.int(),
   category: {
    id: data.categoryId,
    name: faker.commerce.department(),
    image: faker.image.url()
   }
  };
  return this.add(newProduct);
 }

 add(newProduct: Product) {
  this.products.push(newProduct);
  return newProduct;
 }

 updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
  const index = this.products.findIndex(item => item.id === id);
  const prevData = this.products[index];
  this.products[index] = {
   ...prevData,
   ...changes
  }
  return this.products[index];
 }

 find(id: Product['id']) {
  return this.products.filter(item => { item.id === id });
 }
}