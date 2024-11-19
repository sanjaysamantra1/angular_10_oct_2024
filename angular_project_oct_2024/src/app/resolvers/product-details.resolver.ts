import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const productDetailsResolver: ResolveFn<Object> = (route, state) => {
  return inject(ProductService).fetchProductById(+route.params['id']);
};
