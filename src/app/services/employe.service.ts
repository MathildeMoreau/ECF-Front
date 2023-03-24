import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employe } from '../models/Employe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private _http:HttpClient) { }

  getEmployees(){
    return this._http.get<Employe>('http://127.0.0.1:8000/all-personnel');
  }

  postData(employe:any) :Observable<Employe>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employe);
    return this._http.post<Employe>('http://localhost:8080/add-personnel', body, {'headers': headers});
  }
}
