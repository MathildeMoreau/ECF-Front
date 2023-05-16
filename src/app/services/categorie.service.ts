import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Categorie } from '../models/Categorie';
import { Plat } from '../models/Plat';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  getCategories(): Observable<Categorie[]>{
    return this._http.get<Categorie[]>('https://quai-antiques.studiomdev.fr/api/categories.json').pipe(
      tap(res => console.log(res))
    )
  }
}
