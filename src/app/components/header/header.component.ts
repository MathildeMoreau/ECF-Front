import { Element } from '@angular/compiler';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ElementRef } from 'react';
import { Subscription } from 'rxjs';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isMenuOpened: boolean = false;
  subscriptionRoute!: Subscription;

  constructor(
    private _router: Router,
    private renderer: Renderer2
  ){

  }

  ngOnInit(){
    
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
    console.log(this.isMenuOpened);
  }

}
