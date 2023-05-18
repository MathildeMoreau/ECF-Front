import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Plat } from '../models/Plat';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PlatService {

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  getPlats(): Observable<Plat[]>{
    return this._http.get<Plat[]>('https://quai-antiques.studiomdev.fr/api/plats.json').pipe(
      tap(res => console.log(res))
    )
  }

  getPlatsSpecialiteChef(): Observable<Plat[]>{
    return this._http.get<Plat[]>('https://quai-antiques.studiomdev.fr/api/plats.json').pipe(
      map(plat => plat.filter(attr => attr.isSpecialite == true)),
      tap(res => console.log(res))
    )
  }

  getPlatsByCategorie(categorie: any):Observable<Plat[]>{
    return this._http.get<Plat[]>(`https://quai-antiques.studiomdev.fr/api/plats.json?page=1&categorie=${categorie}`).pipe(
      tap(res => console.log(res))
    );
  }

  getPlatById(platId: string): Observable<Plat>{
    return this._http.get<Plat>(`https://quai-antiques.studiomdev.fr${platId}`).pipe(
      tap(res => console.log(res))
    )
  }

  getPlatsMenu1(): Observable<Plat[]>{
    return this._http.get<any>(`https://quai-antiques.studiomdev.fr/api/plats.json?page=1&isMenu1=true`).pipe(
      tap(res => console.log(res))
    );
  }
  getPlatsMenu2(): Observable<Plat[]>{
    return this._http.get<any>(`https://quai-antiques.studiomdev.fr/api/plats.json?page=1&isMenu2=true`).pipe(
      tap(res => console.log(res))
    );
  }
  getPlatsMenu3(): Observable<Plat[]>{
    return this._http.get<any>(`https://quai-antiques.studiomdev.fr/api/plats.json?page=1&isMenu3=true`).pipe(
      tap(res => console.log(res))
    );
  }

  postPlat(plat:any) :Observable<Plat>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(plat);
    return this._http.post<Plat>('https://quai-antiques.studiomdev.fr/api/plats', body, {'headers': headers});
  }
}
