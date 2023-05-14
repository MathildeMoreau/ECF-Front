import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-accepted',
  templateUrl: './reservation-accepted.component.html',
  styleUrls: ['./reservation-accepted.component.scss']
})
export class ReservationAcceptedComponent implements OnInit{
  @Input() reservation !: Reservation;
  reservationList !: Reservation[];
  cancelIsClicked = false;

  constructor(
    private _reservationService : ReservationService,
    private _snackBar: MatSnackBar
  ){

  }

  ngOnInit(): void {
    this._reservationService.getReservations().subscribe(resa => this.reservationList = resa)
  }

  cancelReservation(id: number){
    this._reservationService.cancelReservation(id);
    this.cancelIsClicked = true;
    this.openSnackBar("Réservation annulée");
  }

  openSnackBar(message: string){
    this._snackBar.open(message);
  }

}
