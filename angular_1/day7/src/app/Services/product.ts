import { Injectable } from '@angular/core';
import { Iprocut } from '../Models/iprocut';

@Injectable({
  providedIn: 'root'
})
export class Product {
  products: Iprocut[] = []
   constructor() {}

 getAllProducts(): Iprocut[] {
    return this.products;
  } 
  getProductById(id: number): Iprocut | undefined {
    return this.products.find((prd) => prd.id == id);
  }
  
  filterByCat(id: number): Iprocut[] {
    if(!id) return this.products;
    return this.products.filter((prd) => prd.categoryId == id)
  }
  getPorductIds():number[] {
    return this.products.map(prd=> prd.id)
  }
}
