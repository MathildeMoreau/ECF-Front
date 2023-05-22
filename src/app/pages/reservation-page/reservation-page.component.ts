import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit{
  picker !: any;
  nbCouverts !: number
  nomSession : any;
  emailSession : any;


  constructor(
    private _reservationService : ReservationService,
    private _router : Router,
    private _snackBar: MatSnackBar,
    private _authService : AuthService
  ){

  }

  ngOnInit(): void {
    // Creneaux horaires dispo à afficher selon la date
    this.nbCouverts = 1;
    this.nomSession = this._authService.getUserName();
    this.emailSession = this._authService.getUserEmail();

  }

  checkDate(){
    console.log(this.picker);
  }

  createReservation(reservations : {nbCouverts: number, date: Date, heure: string, allergies: string, nom: string, email: string}){
    this._reservationService.createReservation(reservations)
      .subscribe((res) => {
        console.log(res)
    });
    this._snackBar.open(`Réservation au nom de ${reservations.nom} confirmée`, 'Merci', {duration: 5000});
    this._router.navigate(['/reservation/confirmed'])
  }

}
