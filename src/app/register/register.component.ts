import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Useraccount } from '../models/useraccount';

import {UserService} from '../services/user.service';

@Component( {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit {

    model: any = {};
    errorMessage: string;

    constructor(private router: Router,
            private userService: UserService
            ) { }

    register(){
        console.log(">> register() user ",this.model.username);
         this.userService.create(this.model).subscribe(
                 data => {
                     console.log("User successfully created");
                     this.router.navigate(['/login'])
                     
                 },
                 erro => {
                     console.log("Failed to create user");
                 }
                 
         );
        console.log("<< register() user ");
    }
    ngOnInit() {
    }

    get diagnostic() { return JSON.stringify( this.model ); }
}
