import { Routes } from '@angular/router';
import { EmailPageComponent } from './components/email-page/email-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'email',
        pathMatch: 'full'
    },
    {
        path:'email',
        component:EmailPageComponent
    }
];
