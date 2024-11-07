import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:any;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    const url = 'https://fakestoreapi.com/products'
    this.httpClient.get(url).subscribe((response: any) => {
      console.log(response);
      this.products = response;
    })
  }
}
