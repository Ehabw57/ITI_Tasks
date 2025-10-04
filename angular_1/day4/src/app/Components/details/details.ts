import { Component, OnInit } from '@angular/core';
import { Product } from '../../Services/product';
import { Iprocut } from '../../Models/iprocut';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product: Iprocut | undefined = undefined;
  constructor(private productService: Product, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id:string = this.route.snapshot.paramMap.get('id') || '0';
    this.product = this.productService.getProductById(parseInt(id));
  }
}
