import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {routing} from './app.routing';
import { RegisterComponent } from './register/register.component';

import {UseraccountService} from './services/useraccount.service';
import {AuthenticationService} from './services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UseraccountService, AuthenticationService, AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
