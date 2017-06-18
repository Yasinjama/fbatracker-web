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
  returnUrl: string;
  loading = false;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
            // reset login status
        this.authenticationService.logout();
            // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
            this.loading = true;
            this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                      console.log('Authentication is successfull ' + data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
//                    this.alertService.error(error);
//                    this.loading = false;
                });
  }
}
