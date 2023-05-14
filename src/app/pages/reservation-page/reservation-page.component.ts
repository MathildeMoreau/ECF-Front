import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit{
  picker !: any;
  nbCouverts !: number


  constructor(
    private _reservationService : ReservationService,
    private _router : Router,
  ){

  }

  ngOnInit(): void {
    // Creneaux horaires dispo à afficher selon la date
    this.nbCouverts = 1;

  }

  checkDate(){
    console.log(this.picker);
  }

  createReservation(reservations : {nbCouverts: number, date: string, allergies: string, nom: string, email: string}){
    this._reservationService.createReservation(reservations)
      .subscribe((res) => {
        console.log(res)
    });
    alert(`Réservation confirmée au nom de ${reservations.nom} !`);
    this._router.navigate(['/reservation/confirmed'])
  }

}
