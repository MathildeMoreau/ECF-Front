import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CartePageComponent } from './pages/carte-page/carte-page.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'admin',
    component: AdminPageComponent
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
    path: '*',
    component: HomepageComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
