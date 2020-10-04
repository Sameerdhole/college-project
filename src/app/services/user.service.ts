import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { UserExists } from '../shared/UserExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getUsers(): Observable<User> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<User>(baseURL + 'menu')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
   isUser(id: string): Observable<UserExists> {
    if (!this.auth.isLoggedIn()) {
      return of({ exists: false, users: null });
    }
    return this.http.get<UserExists>(baseURL + 'menu/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
