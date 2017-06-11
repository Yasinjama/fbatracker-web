import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
                           {path: 'dashboard', component: DashboardComponent},
                           { path: 'login', component: LoginComponent },
                           { path: 'register', component: RegisterComponent },

                           // otherwise redirect to home
                           { path: '**', redirectTo: '' }
                       ];

export const routing = RouterModule.forRoot(appRoutes);
