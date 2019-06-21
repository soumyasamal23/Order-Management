import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../gaurds/login.guard';

export const Indexroutes: Routes = [
    {path: '', component: IndexComponent, canActivate: [LoginGuard],
    children: [
    {path: 'login', component: LoginComponent},
    ]
   }
];
