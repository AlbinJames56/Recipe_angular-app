import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component'; 
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { AboutComponent } from './about/about.component'; 
import { RecipesComponent } from './recipes/recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"contact",component:ContactComponent},
    {path:"recipes",component:RecipesComponent},
    {path:"saved-recipe",component:SavedRecipesComponent},
    {path:"about",component:AboutComponent},
    {path:"recipes/:id/view",component:ViewRecipesComponent},
];
