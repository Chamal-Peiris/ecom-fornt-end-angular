import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environment';
import { UserDto } from '../dto/UserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http :HttpClient) { }
  authenticateUser(user: UserDto): Observable<any> {
    return this.http.post(this.apiBaseUrl+"/authenticate", user, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const responseBody = response.body;
          if (responseBody && responseBody.token) {
            // Handle successful authentication and return token
            return responseBody.token;
          } else {
            throw new Error('Invalid authentication response');
          }
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          const statusCode = errorResponse.error.status;
          const errorMessage = errorResponse.error.message;
          // Throw an exception with error message and status code
          alert(`Authentication failed - Status Code: ${statusCode}, Message: ${errorMessage}`);
          throw new Error(`Authentication failed - Status Code: ${statusCode}, Message: ${errorMessage}`);
        })
      );
  }
}
