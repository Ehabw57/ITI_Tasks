import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../Services/product';
import { Iprocut } from '../../Models/iprocut';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { interval, Observable, repeat, Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit, OnDestroy{
  product: Iprocut | undefined = undefined;
  currentIndex: number = 0;
  productIds: number[] = [];
  productid!: string;
  sub!:Subscription;
  constructor(
    private productService: Product,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.productid = param.get('id')!;
      this.product = this.productService.getProductById(parseInt(this.productid));
      this.productIds = this.productService.getPorductIds();
    });

    const observerd = new Observable(observer => {
      observer.next('one')
      observer.next('tow')
      setTimeout(() => {
        observer.next('four');
        observer.complete();
      }, 3000);
      //throw new Error("Intentonal error")
      observer.next('three')

    })
    
    const source = interval(1000)

    // const repeating = repeat(2)(observerd)
    
    // this.sub = repeating.subscribe({
    //   next: (value) => console.log(value)
    // })
    
    this.sub = source.subscribe({
      next: (value) => console.log(value)
    })

    // this.sub = observer.subscribe({
    //   next:(data) => console.log(`we got: ${data}`),
    //   error:(err) => console.error(err),
    //  complete:() => console.log('no more data!'),
    // });
  }

  nextProduct() {
    this.currentIndex = this.productIds.findIndex((id) => id == this.product?.id);
    this.router.navigate(['/details', this.productIds[++this.currentIndex]]);
  }

  prevProduct() {
    this.currentIndex = this.productIds.findIndex((id) => id == this.product?.id);
    this.router.navigate(['/details', this.productIds[--this.currentIndex]]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
