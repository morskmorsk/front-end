import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any = [];

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      response => {
        this.customers = response;
        console.log(this.customers);
      },
      error => {
        console.log(error);
      }
    );
  }
}
