import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Iprocut } from '../../Models/iprocut';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductStyle } from '../../Directive/product';
import { Product } from '../../Services/product';
import { Router, RouterLink } from '@angular/router';
import { ProductApi } from '../../Services/product-api';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule, ProductStyle, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnChanges {
  clinetName: string = 'Ehab Hegazy';
  date: Date = new Date();
  @Input() filterCat: string = '0';
  filterdProducts: Iprocut[] = [];
  @Output() addToCart = new EventEmitter<Iprocut>();

  constructor(private route:Router,private prdService: Product, private productApi: ProductApi) {}

  ngOnChanges(): void {
    this.productApi.getProductByCategoryId(this.filterCat).subscribe({
      next: (data) => {
        this.filterdProducts = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  emitAddtoCart(prd: Iprocut) {
    this.addToCart.emit(prd);
  }

  deleteProduct(id:number, event:any){
    event.stopPropagation()
    this.productApi.removeProduct(String(id)).subscribe({
      next:()=>{
        console.log('productDelted')
        location.reload()
      }
    })
  }

  updateProduct(id:number, event:Event){
    event.stopPropagation()
    this.route.navigate([`/updateProduct/${id}`])
  }
}
