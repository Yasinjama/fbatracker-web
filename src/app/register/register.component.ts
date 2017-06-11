import { Component, OnInit } from '@angular/core';
import {UseraccountService} from '../services/useraccount.service';
import {Useraccount} from '../models/useraccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 model: any = {};

    constructor(private router: Router,
            private userService: UseraccountService
            ) { }

  ngOnInit() {
  }

    register(){
        console.log(">> register() user ",this.model.username);
         this.userService.create(this.model).subscribe(
                 data => {
                     console.log("User successfully created");
                     this.router.navigate(['/login']);

                 },
                 erro => {
                     console.log("Failed to create user");
                 }
                 
         );
        console.log("<< register() user ");
    }
}
