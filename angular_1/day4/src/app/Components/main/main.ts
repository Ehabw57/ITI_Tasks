import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { Iprocut } from '../../Models/iprocut';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductStyle } from '../../Directive/product';
import { Product } from '../../Services/product';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule, ProductStyle, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnChanges {
  clinetName: string = 'Ehab Hegazy';
  date:Date = new Date()
  @Input() filterCat: string = '0';
  filterdProducts: Iprocut[] = [];
  @Output() addToCart = new EventEmitter<Iprocut>();
  
  constructor(private prdService: Product) {
    console.log(prdService.products);
  }
  
  
  
  ngOnChanges(): void {
    this.filterdProducts = this.prdService.filterByCat(Number(this.filterCat));
}

emitAddtoCart(prd: Iprocut) {
    this.addToCart.emit(prd);
  }

}
