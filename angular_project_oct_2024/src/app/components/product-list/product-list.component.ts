import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    const url = 'https://fakestoreapi.com/products'
    this.httpClient.get(url, { observe: 'response' }).subscribe((response: any) => {
      console.log(response);
      this.products = response.body;
    })
  }
}
