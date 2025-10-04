import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLogged: BehaviorSubject<boolean>;

  constructor() {
    this.isLogged = new BehaviorSubject<boolean>(this.checkUserState)
   }

  login(): void {
    localStorage.setItem("token", "1234")
    this.isLogged.next(true)
  }

  logout(): void {
    this.isLogged.next(false)
    localStorage.removeItem("token")
  }

  get checkUserState(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  get loggedAsObservable():Observable<boolean>{
    return this.isLogged.asObservable()
  }
}