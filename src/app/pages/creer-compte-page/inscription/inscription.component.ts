import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{

  constructor(
    private _clientService : ClientService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ){

  }

  ngOnInit(): void {
    
  }

  addClient(client : {nom: string, prenom: string, email: string, password: string, nbConvives: number}){
    this._clientService.AddClient(client)
    .subscribe((res) => {
      console.log(res)
  });
  this._snackBar.open(`Compte créé ${client.prenom} !`, '🤩', {duration: 5000});
  this._router.navigate(['/connexion'])
  }
}
