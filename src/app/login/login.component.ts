import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = [];

  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
            this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                      console.log('Authentication is successfull ' + data);
//                    this.router.navigate([this.returnUrl]);
                },
                error => {
//                    this.alertService.error(error);
//                    this.loading = false;
                });
  }
}
