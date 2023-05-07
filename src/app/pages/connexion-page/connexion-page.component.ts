import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {

  constructor(
    private router : Router
  ){

  }

  public goToAdminPanel(): void{
    this.router.navigateByUrl('http://quai-antiques.studiomdev.fr/admin');
  }
}
