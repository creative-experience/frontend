import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

import { environment } from './../../../environments/environment';
import { AppConstants } from 'src/app/constants/app.constants';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.rootUrl}/${AppConstants.USER_API_URL}/form`, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(`${environment.rootUrl}/${AppConstants.USER_API_URL}/form/${user.id}`, user);
  }

  getAllUser() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.rootUrl}/${AppConstants.USER_API_URL}/list`);
  }

  getUserById(id: any): Observable<User> {
    return this.http.get<User>(`${environment.rootUrl}/${AppConstants.USER_API_URL}/details/${id}`);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete<any>(`${environment.rootUrl}/${AppConstants.USER_API_URL}/details/${user.id}`)
  }

}
