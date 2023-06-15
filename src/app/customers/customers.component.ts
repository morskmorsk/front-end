import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { LoginService } from '../services/login.service';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any = [];
  refreshToken:any = localStorage.getItem('refresh_token')

  constructor(public customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().pipe(
      tap(
        response => {
          this.customers = response;
          console.log(this.customers);
        },
        error => {
          this.handleError(error);
        }
      ),
      catchError(error => {
        if (error.status === 401) {
          return this.refreshToken.pipe(
            switchMap(() => {
              return this.customerService.getCustomers();
            })
          );
        } else {
          throw error;
        }
      })
    ).subscribe();
  }

  private refreshTokenAndRetry(request: Observable<any>): Observable<any> {
    return this.refreshToken.pipe(
      switchMap(() => {
        return request;
      })
    );
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
