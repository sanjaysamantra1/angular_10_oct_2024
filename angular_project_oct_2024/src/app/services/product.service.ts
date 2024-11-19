import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  
  fetchProductById(id: number) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }

}
