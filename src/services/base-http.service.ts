import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {

 public constructor(protected apiUrl: string) { }

 async all() {
  const { data } = await axios.get<TypeClass[]>(this.apiUrl);
  return data;
 }

 async create(dto: TypeClass) {
  const { data } = await axios.post<TypeClass>(this.apiUrl, dto);
  return data;
 }

 async find<ID>(id: ID) {
  const { data } = await axios.get<TypeClass>(`${this.apiUrl}/${id}`);
  return data;
 }

 async update<ID, DTO>(id: ID, changes: DTO) {
  const { data } = await axios.put(`${this.apiUrl}/${id}`, changes);
  return data;
 }
}

(async () => {

 const urlProducts = 'https://api.escuelajs.co/api/v1/products';
 const productService = new BaseHttpService<Product>(urlProducts);
 const products = await productService.all();
 console.log('products: ', products.length);

 productService.update<Product['id'], UpdateProductDto>(products[0].id, {
  title: 'insait'
 });




 const urlCategories = 'https://api.escuelajs.co/api/v1/categories';
 const categoryService = new BaseHttpService<Category>(urlCategories);
 const categories = await categoryService.all();
 console.log('categories: ', categories.length);


})();