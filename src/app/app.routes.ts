import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';


export const routes: Routes = [
    {
        path : "login" , component : LoginComponent
    },
    {
        path : "" , component : BodyComponent
    }
];
