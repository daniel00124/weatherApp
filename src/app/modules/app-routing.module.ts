import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from '../pages/favorites-page/favorites-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
  {path:'favorite', component:FavoritesPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
