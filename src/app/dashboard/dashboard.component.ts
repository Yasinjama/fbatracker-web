import { Component, OnInit } from '@angular/core';
import { Useraccount } from '../models/useraccount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: Useraccount;

  constructor() {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
