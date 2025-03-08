import { Routes } from '@angular/router';
import { EmailPageComponent } from './components/email-page/email-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'email',
        pathMatch: 'full'
    },
    {
        path:'email',
        component:EmailPageComponent
    },
    {
        path:'recipe',
        component:RecipePageComponent
    }
];
