<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;

}
=======
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377

@Component({
  selector: 'app-product-list',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'


  
})



  export class ProductListComponent {
    products: Product[] = [
      { id: 1, title: 'Laptop', description: 'High-end laptop', price: 1500 },
      { id: 2, title: 'Smartphone', description: 'Latest model', price: 800 },
      { id: 3, title: 'Headphones', description: 'Noise-canceling', price: 200 },
      { id: 4, title: 'Monitor', description: '4K resolution', price: 300 },
      { id: 5, title: 'Keyboard', description: 'Mechanical keyboard', price: 100 },
      // Add more products as needed
    ];
  
    // Properties for pagination, sorting, and search
    currentPage: number = 1;
    itemsPerPage: number = 2;
    sortDirection: 'asc' | 'desc' = 'asc';
    searchQuery: string = '';
  
    // Method to get filtered and sorted products for current page
    get filteredProducts(): Product[] {
      let filtered = this.products;
  
      // Search functionality
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
  
      // Sorting functionality
      filtered.sort((a, b) => {
        if (a.title < b.title) return this.sortDirection === 'asc' ? -1 : 1;
        if (a.title > b.title) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  
      // Pagination functionality
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return filtered.slice(startIndex, endIndex);
    }
  
    // Method to change sort direction
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
  
    // Method to change page
    changePage(page: number) {
      this.currentPage = page;
    }
  
    // Method to get total pages based on search results
    get totalPages(): number {
      const filteredCount = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      ).length;
      return Math.ceil(filteredCount / this.itemsPerPage);
    }
  }


=======
  imports: [],
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
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377
