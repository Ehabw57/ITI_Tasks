import { Injectable } from '@angular/core';
import Icategory from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class Category {
  categories: Icategory[];
  constructor() {
    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Computers' },
      { id: 3, name: 'Furniture' },
    ];
  }
  getallCategories(): Icategory[] {
    return this.categories;
  }
}
