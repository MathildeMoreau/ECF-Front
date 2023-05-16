import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  nom : any;
  prenom !: string;
  email !: string;
  isAdmin !: boolean;

  constructor(
    private _authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.nom = this._authService.getUserName();
    this.isAdmin = this._authService.isAdmin();
  }


}
