import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CartePageComponent } from './pages/carte-page/carte-page.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReservationAcceptedComponent } from './pages/reservation-accepted/reservation-accepted.component';
import { AuthGuard } from './guard/auth.guard';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { InscriptionComponent } from './pages/creer-compte-page/inscription/inscription.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path: 'carte',
    component: CartePageComponent
  },
  {
    path: 'connexion',
    component: ConnexionPageComponent
  },
  {
    path: 'reservation',
    component: ReservationPageComponent
  },
  {
    path: 'menus',
    component: MenuPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'reservation/confirmed',
    component: ReservationAcceptedComponent
  },
  {
    path: 'user/:id',
    component: UserPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'personnel/:id',
    component: UserPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: '*',
    component: HomepageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
