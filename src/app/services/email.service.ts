import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url ="";

  constructor(private _http: HttpClient) { }

  sendEmail(input: any){
    return this._http.post(this.url, input).pipe(
      map((response) => {
        if (response) {
          return response
        } else {
          return;
        }
      }, (error: any) => {
        if (error){
          return error
        } else {
          return;
        }
      })
    )
  }
}
