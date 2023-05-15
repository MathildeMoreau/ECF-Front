import { Injectable, OnInit } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { EmployeService } from './employe.service';
import { Employe } from '../models/Employe';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  redirectUrl !: string; 
  employe !: Employe ;

  constructor(
    private _employeService : EmployeService
  ) {

  }
  ngOnInit(): void {
    
  }

  isLoggedIn(){
    return sessionStorage.getItem('email') != null;
  }

  isAdmin(){
    return sessionStorage.getItem('admin') != null;
  }

  getUserEmail(){
    return sessionStorage.getItem('email') != null ? sessionStorage.getItem('email')?.toString() : '';
  }

  getUserName(){
    return sessionStorage.getItem('nom') != null ? sessionStorage.getItem('nom')?.toString() : '';
  }

  getUserNbConvives(){
    return sessionStorage.getItem('nb_convives') != null ? sessionStorage.getItem('nb_convives') : 1;
  }
}
