import { Component, OnInit } from '@angular/core';
import { Useraccount } from '../models/useraccount';
import { UseraccountService } from '../services/useraccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: Useraccount;

  constructor(private userService: UseraccountService,private router: Router) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  deleteUser() {
    this.userService.delete(this.currentUser.username).subscribe(
      data => {
          this.router.navigate(['/login']);
      });
  }
}
