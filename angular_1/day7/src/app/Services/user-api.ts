import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  constructor(private httpClient: HttpClient) {}

  createUser(newUser: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(environment.BaseURL + '/Users', JSON.stringify(newUser), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getUserByEmail(email: string): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(environment.BaseURL + `/Users?email=${email}`);
  }

  comparePassword(email: string, password: string): Observable<boolean> {
    return this.getUserByEmail(email).pipe(
      map((users: IUser[]) => {
        if (users.length === 0)
          return false; 
        const user = users[0];
        return user.password === password
      })
    );
  }
}
