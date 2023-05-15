import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/Menu';
import { Client } from '../models/Client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  getClients(): Observable<Client[]>{
    return this._http.get<Client[]>('https://quai-antiques.studiomdev.fr/api/clients.json').pipe(
      tap(res => console.log(res))
    )
  }

  getClientByMail(email: any): Observable<Client>{
    return this._http.get<Client>(`https://quai-antiques.studiomdev.fr/api/clients.json?page=1&email=${email}`).pipe(
      tap(res => console.log(res))
    );
  }


  AddClient(client : {}): Observable<any>{
    return this._http.post<Client>('https://quai-antiques.studiomdev.fr/api/clients', client);
  }
}
