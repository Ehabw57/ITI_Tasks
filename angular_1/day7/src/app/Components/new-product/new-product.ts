import { Component, OnInit } from '@angular/core';
import { Iprocut } from '../../Models/iprocut';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductApi } from '../../Services/product-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct implements OnInit {
  newProduct: Iprocut = {} as Iprocut;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productApi: ProductApi
  ) {}
  addNewProduct() {
    const pid = this.route.snapshot.paramMap.get('id');
    if (pid) {
      this.productApi.updateProduct(pid, this.newProduct).subscribe(data=>{
        console.log(data)
        this.router.navigate(['/home'])
      })
    } else {
      this.productApi.addProduct(this.newProduct).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
      });
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productApi.getProductById(params.get('id')!).subscribe({
        next: (data) => {
          this.newProduct = data;
        },
      });
    });
  }
}
