import { Element } from '@angular/compiler';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ElementRef } from 'react';
import { Subscription } from 'rxjs';
import { NavigationComponent } from '../navigation/navigation.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isMenuOpened: boolean = false;
  compteId : any;

  constructor(
    private _router: Router,
    private renderer: Renderer2,
    private _authService : AuthService
  ){

  }

  ngOnInit(){
    this.compteId = this._authService.getUserId();
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
    console.log(this.isMenuOpened);
  }

}
