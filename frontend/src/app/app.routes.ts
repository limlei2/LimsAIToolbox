import { Routes } from '@angular/router';
import { EmailPageComponent } from './components/email-page/email-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ResumeHelperComponent } from './components/resume-helper/resume-helper.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { AudioComponent } from './components/audio/audio.component';
import { ImageComponent } from './components/image/image.component';

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
    },
    {
        path:'resume',
        component:ResumeHelperComponent
    },
    {
        path:'chat',
        component:ChatbotComponent
    },
    {
        path:'audio',
        component:AudioComponent
    },
    {
        path:'image',
        component:ImageComponent
    }
];
