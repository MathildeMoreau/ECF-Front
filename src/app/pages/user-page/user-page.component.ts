import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  nom : any;
  prenom !: any;
  email !: any;
  isAdmin !: boolean;
  reservations !: any;

  constructor(
    private _authService: AuthService,
    private _reservationService: ReservationService,
    private _routerService : Router
  ){

  }

  ngOnInit(): void {
    this.nom = this._authService.getUserName();
    this.isAdmin = this._authService.isAdmin();
    this.email = this._authService.getUserEmail();
    this.prenom = this._authService.getUserFirstName();

    this.getReservations(this.email);
  }

  getReservations(email:string){
    return this._reservationService.getReservationByEmail(this.email).subscribe(
      resa => this.reservations = resa
    )
  }

  deconnexion(){
    sessionStorage.clear();
    this._routerService.navigate(['/home']);
  }


}
