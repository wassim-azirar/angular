import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // get a specific number of users from the REST api
  getUsers(studentsNumber: number): Observable<UserResponse> {
    // return this.http.get<UserResponse>(environment.apiUrl + '?results=' + studentsNumber);
    return this.http.get<UserResponse>(`${environment.apiUrl}?results=${studentsNumber}`);
  }

  // get a specific user by it's email
  getUserByEmail(email: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${environment.apiUrl}?email=${email}`);
  }
}
