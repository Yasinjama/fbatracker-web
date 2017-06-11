import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Useraccount} from '../models/useraccount';

@Injectable()
export class UseraccountService {

	private baseUrl: string = 'https://fbatracker-rest.herokuapp.com/api/v1';

    constructor(private http: Http) { }
    
    create(user: Useraccount) {
        console.log('Creating user  ' + user.username); 
        return this.http.post(`${this.baseUrl}/useraccount`, user, (response: Response) => response.json());
    }
    
    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
