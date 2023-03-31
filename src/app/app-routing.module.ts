import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { PopularsComponent } from './components/populars/populars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: 'register', component:RegisterComponent},
  { path: 'main', component: NavbarComponent, canActivate: [AuthGuard],
  children: [
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
    { path: 'populars', component: PopularsComponent, canActivate: [AuthGuard]},
    { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]}
  ]},
  { path: 'login', component:LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
