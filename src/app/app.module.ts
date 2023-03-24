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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    HeaderHomepageComponent,
    GalerieComponent,
    PhotoElementComponent,
    AdminPageComponent,
    ChefSpecialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
