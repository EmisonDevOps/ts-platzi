import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';

export class ProductMemoryService {

 private products: Product[] = [];
 private apiUrl = 'https://api.escuelajs.co/api/v1/products';

 async create(params: CreateProductDto) {
  const { data } = await axios.post(this.apiUrl, params);
  return data;
 }

 async update(id: Product['id'], changes: UpdateProductDto) {
  const { data } = await axios.put(`${this.apiUrl}/${id}`, changes);
  return data;
 }

 async find(id: Product['id']) {
  const { data } = await axios.get<Product>(`${this.apiUrl}/${id}`);
  return data;
 }

 async all() {
  const { data } = await axios.get<Product[]>(this.apiUrl);
  return data;
 }
}