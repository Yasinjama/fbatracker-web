import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private baseUrl = 'https://fbatracker-rest.herokuapp.com/api/v1';
  
  constructor(private http: Http) { }

  login(username: string, password: string) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.baseUrl}/authenticate`, params.toString(), options)
          .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log('Authentication Successful user ' + JSON.stringify(user));
//                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
//                }
            });
  }
}
