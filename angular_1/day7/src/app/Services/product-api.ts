import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Iprocut } from '../Models/iprocut';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  constructor(private httpClinet: HttpClient) {}

  getAllProducts(): Observable<Iprocut[]> {
    return this.httpClinet.get<Iprocut[]>(environment.BaseURL + '/Products');
  }

  getProductById(id: string): Observable<Iprocut> {
    return this.httpClinet.get<Iprocut>(environment.BaseURL + `/Products/${id}`);
  }

  getProductByCategoryId(id: string): Observable<Iprocut[]> {
    if (id == '0') return this.getAllProducts();
    return this.httpClinet.get<Iprocut[]>(environment.BaseURL + `/Products?categoryId=${id}`);
  }

  addProduct(newProduct: Iprocut): Observable<Iprocut> {
    return this.httpClinet.post<Iprocut>(
      environment.BaseURL + '/Products',
      JSON.stringify(newProduct)
    );
  }

  removeProduct(id: string): Observable<Iprocut> {
    return this.httpClinet.delete<Iprocut>(environment.BaseURL + `/Products/${id}`);
  }

  updateProduct(id: string, product: Iprocut): Observable<Iprocut> {
    return this.httpClinet.patch<Iprocut>(environment.BaseURL + `/Products/${id}`, product);
  }
}
