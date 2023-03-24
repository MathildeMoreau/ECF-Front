import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{

  newEmployees: any;

  constructor(private _employeService: EmployeService){

  }
  ngOnInit(): void {
    this.listOfProducts;
  }

    
  onSave(employe: {id: number, nom: string, prenom: string, email: string, password: string, role:string, admin: number}) {
    console.log(employe);
    this._employeService.postData(employe).subscribe(personnel => {
      console.log(personnel);
     })
  }

  listOfProducts(){
    this._employeService.getEmployees().subscribe(res => {
      this.newEmployees = res;
    })
    console.log(this.newEmployees);
  }
}
