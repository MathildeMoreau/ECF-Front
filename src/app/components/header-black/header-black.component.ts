import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-black',
  templateUrl: './header-black.component.html',
  styleUrls: ['./header-black.component.scss']
})
export class HeaderBlackComponent implements OnInit{
  isMenuOpened: boolean = false;
  compteId: any;

  constructor(
    private _router: Router,
    private _authService: AuthService
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
