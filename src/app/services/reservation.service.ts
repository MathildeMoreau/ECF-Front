import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Categorie } from '../models/Categorie';
import { Plat } from '../models/Plat';
import { Reservation } from '../models/Reservation';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  getReservations(): Observable<Reservation[]>{
    return this._http.get<Reservation[]>('https://quai-antiques.studiomdev.fr/api/reservations.json').pipe(
      tap(res => console.log(res))
    )
  }

  createReservation(nb_couverts: number, nom: string): Observable<any>{
    return this._http.post('https://quai-antiques.studiomdev.fr/api/reservations', {nb_couverts, nom});
  }

  cancelReservation(id: number) : Observable<any>{
    return this._http.delete(`https://quai-antiques.studiomdev.fr/api/reservations${id}`);
  }
}
