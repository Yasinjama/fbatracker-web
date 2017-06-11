import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
                           {path: '/', component: DashboardComponent, canActivate: [AuthGuard]},
                           { path: 'login', component: LoginComponent },
                           { path: 'register', component: RegisterComponent },

                           // otherwise redirect to home
                           { path: '**', redirectTo: '' }
                       ];

export const routing = RouterModule.forRoot(appRoutes);
