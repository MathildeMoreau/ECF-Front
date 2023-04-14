import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderHomepageComponent } from './pages/header-homepage/header-homepage.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { PhotoElementComponent } from './components/photo-element/photo-element.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChefSpecialiteComponent } from './components/chef-specialite/chef-specialite.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CartePageComponent } from './pages/carte-page/carte-page.component';
import { CarteCategoriesComponent } from './components/carte-categories/carte-categories.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { DatepickerInlineCalendarExampleComponent } from './components/datepicker-inline-calendar-example/datepicker-inline-calendar-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarteElementComponent } from './components/carte-element/carte-element.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MenuElementComponent } from './components/menu-element/menu-element.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    HeaderHomepageComponent,
    GalerieComponent,
    PhotoElementComponent,
    AdminPageComponent,
    ChefSpecialiteComponent,
    FooterComponent,
    HeaderComponent,
    TopHeaderComponent,
    CartePageComponent,
    CarteCategoriesComponent,
    ConnexionPageComponent,
    ReservationPageComponent,
    DatepickerInlineCalendarExampleComponent,
    CarteElementComponent,
    MenuPageComponent,
    MenuElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
