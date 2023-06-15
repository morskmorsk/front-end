import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/users/').pipe(
      tap((response) => {
        // console.log(response);
      }
    ));
  }
}
