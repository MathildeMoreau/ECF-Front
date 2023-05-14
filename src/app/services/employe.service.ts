import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employe } from '../models/Employe';
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get<Employe[]>('https://quai-antiques.studiomdev.fr/api/clients.json');
  }

  getEmployeByMail(email: string){
    return this._http.get<Employe>(`https://quai-antiques.studiomdev.fr/api/personnels.json?page=1&email=${email}`).pipe(
      tap(res => console.log(res))
    );
  }

  postData(employe:any) :Observable<Employe>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employe);
    return this._http.post<Employe>('https://quai-antiques.studiomdev.fr/api/clients.json', body, {'headers': headers});
  }
}
