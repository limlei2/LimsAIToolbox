import { Routes } from '@angular/router';
import { EmailPageComponent } from './components/email-page/email-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'email',
        component:EmailPageComponent
    },
    {
        path:'recipe',
        component:RecipePageComponent
    },
    {
        path:'contactme',
        component:ContactMeComponent
    }
];
