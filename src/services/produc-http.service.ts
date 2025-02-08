import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { ProductService } from '../models/product-service.model';

export class ProductHttpService implements ProductService {
 private apiUrl = 'https://api.escuelajs.co/api/v1/products';

 async all() {
  const { data } = await axios.get<Product[]>(this.apiUrl);
  return data;
 }

 async update(id: Product['id'], changes: UpdateProductDto) {
  const { data } = await axios.put<Product>(`${this.apiUrl}/${id}`, changes);
  return data;
 }

 async create(dto: CreateProductDto) {
  const { data } = await axios.post<Product>(this.apiUrl, dto);
  return data;
 }
 async find(id: Product['id']) {
  const { data } = await axios.get<Product>(`${this.apiUrl}/${id}`);
  return data;
 }



}