import { Injectable, OnInit } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { EmployeService } from './employe.service';
import { Employe } from '../models/Employe';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  isLoggedIn: boolean = false;
  redirectUrl !: string; 
  employe !: Employe ;

  constructor(
    private _employeService : EmployeService
  ) {

  }
  ngOnInit(): void {
    
  }

  login(mail: string, password: string): Observable<boolean>{
    this._employeService.getEmployeByMail(mail).subscribe(
      (emp) => this.employe = emp
    );
    const isLoggedIn = true;
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
      )
  }

  logout(){
    this.isLoggedIn = false;
  }
}
