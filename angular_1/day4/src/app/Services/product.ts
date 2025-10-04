import { Injectable } from '@angular/core';
import { Iprocut } from '../Models/iprocut';

@Injectable({
  providedIn: 'root'
})
export class Product {
  products: Iprocut[];
   constructor() {
    this.products = [
      {
        id: 2,
        name: 'Smart Watch',
        price: 129.00,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VmIXNbtDt6ilw0v4SWMjJSiyLVM3SaSGcw&s',
        quantity: 0,
        categoryId: 1,
        isPurched: false,
      },
      {
        id: 3,
        name: 'Gaming Mouse',
        price: 49.00,
        imgUrl: 'https://m.media-amazon.com/images/I/61QY3V6A-NL._UF894,1000_QL80_.jpg',
        quantity: 20,
        categoryId: 2,
        isPurched: false,
      },
      {
        id: 4,
        name: 'Mechanical Keyboard',
        price: 99.00,
        imgUrl:
          'https://matias.store/cdn/shop/products/FK602QPCSKU1960x1960.jpg?v=1648949478&width=1946',
        quantity: 0,
        categoryId: 2,
        isPurched: false,
      },
      {
        id: 5,
        name: 'King Chair',
        price: 59.10,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_le6c1Jx0RTueAaN4v_VD2Nqb_ypea4qvEQ&s',
        quantity: 25,
        categoryId: 3,
        isPurched: false,
      },
      {
        id: 6,
        name: 'Queens Bed',
        price: 39.10,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRytiJPtw6IHylMddr89v0vdC1mKDLfZfkw&s',
        quantity: 8,
        categoryId: 3,
        isPurched: false,
      },
      {
        id: 7,
        name: 'Wireless Earbuds',
        price: 69.10,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEef6bX-zwpGDoBKaL48iYgeIS0SpPgZhOA&s',
        quantity: 0,
        categoryId: 1,
        isPurched: false,
      },
      {
        id: 8,
        name: 'Webcam HD',
        price: 45.0,
        imgUrl:
          'https://i5.walmartimages.com/seo/1080P-Web-Cam-HD-Camera-Webcam-with-Mic-Microphone-for-Computer-PC-Laptop-Notebook_dc507d76-2a47-420e-a709-13ddfa1c6396.c2b93dba35f7ed0bb10e6bacac3173a2.jpeg',
        quantity: 13,
        categoryId: 2,
        isPurched: false,
      },
      {
        id: 9,
        name: 'Smart Lamp',
        price: 34.00,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg97P749fHl89M7EVVJLNpFmijVF63lT0Sg&s',
        quantity: 0,
        categoryId: 3,
        isPurched: false,
      },
    ];
  }
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
}
