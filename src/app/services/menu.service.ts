import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/Menu';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  getMenus(): Observable<Menu[]>{
    return this._http.get<Menu[]>('https://quai-antiques.studiomdev.fr/api/menus.json').pipe(
      tap(res => console.log(res))
    )
  }
}
