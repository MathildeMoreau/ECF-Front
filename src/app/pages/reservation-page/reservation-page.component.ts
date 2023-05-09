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

  horairesDispoList !: string[];
  allReservations !: Reservation[];
  @Input() reservation !: Reservation;

  constructor(
    private _reservationService : ReservationService,
    private _router : Router
  ){

  }

  ngOnInit(): void {
    this._reservationService.getReservations().subscribe(
      resa => this.allReservations = resa
    )
    // Creneaux horaires dispo à afficher selon la date

  }

  onSubmit(){
    console.log('Form submit' + this.reservation);
    this._router.navigate(['reservation', this.reservation.id]);
  }

}
