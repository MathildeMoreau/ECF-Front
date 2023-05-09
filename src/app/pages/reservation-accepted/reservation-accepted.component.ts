import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation-accepted',
  templateUrl: './reservation-accepted.component.html',
  styleUrls: ['./reservation-accepted.component.scss']
})
export class ReservationAcceptedComponent implements OnInit{
  @Input() reservation !: Reservation;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
