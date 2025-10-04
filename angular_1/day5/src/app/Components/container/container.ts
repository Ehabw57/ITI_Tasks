import { Component } from '@angular/core';
import { Main } from '../main/main';
import { FormsModule } from '@angular/forms';
import { Iprocut } from '../../Models/iprocut';
import { Cart } from '../../Models/cart';
import { CardPipe } from '../../Pipes/card-pipe';
import { Category } from '../../Services/category';
import Icategory from '../../Models/icategory';

@Component({
  selector: 'app-container',
  imports: [Main, FormsModule, CardPipe],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  cart: Cart[] = [];
  selectedCat: string = '0';
  cardNumber: string = '';
  categories: Icategory[];

  constructor(private categoryService: Category) {
    this.categories = this.categoryService.getallCategories();
  }

  addToCart(prd: Iprocut) {
    const target = this.cart.findIndex((p) => p.id == prd.id);
    if (target == -1) {
      this.cart.push({ ...prd, amount: 1 });
      return;
    }
    this.cart[target].amount++;
  }
}