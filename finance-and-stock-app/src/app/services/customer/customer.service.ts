import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';

import { environment } from './../../../environments/environment.development';
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = environment.rootUrl + AppConstants.CUSTOMER_API_URL;

  constructor(private http: HttpClient) { }

  saveCustomer(customer: Customer) : Observable<Customer> {
    return this.http.post<Customer>( `${this.apiUrl}`, customer);
  }

  updateCustomer(customer: Customer) : Observable<any> {
    return this.http.put<Customer>( `${this.apiUrl}/${customer.id}`, customer);
  }

  getAllCustomer() : Observable<Customer[]> {
    return this.http.get<Customer[]>( `${this.apiUrl}/list-user`);
  }

  getCustomerById(id: number) : Observable<Customer> {
    return this.http.get<Customer>( `${this.apiUrl}/${id}` );
  }

  deleteCustomer(customer: Customer) : Observable<any> {
    return this.http.delete<any>( `${this.apiUrl}/${customer.id}`);
  }

}
