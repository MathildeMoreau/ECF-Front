import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit{
  message: string = "Vous êtes déconnecté";
  email !: string;
  password !: string;
  auth !: AuthService;

  constructor(
    private router : Router,
    private authService : AuthService
  ){

  }
  ngOnInit(): void {
    this.auth = this.authService;

  }

  public goToAdminPanel(): void{
    this.router.navigateByUrl('http://quai-antiques.studiomdev.fr/admin');
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message = "Vous êtes connectés";
    } else {
      this.message = "Identifiant ou mot de passe incorrect";
    }
  }

  login(infos : {email:string , password: string}){
    this.message = "Connexion en cours";
    this.auth.login(infos.email, infos.password).subscribe(
      (isLoggedIn) => {
        this.setMessage();
        if (isLoggedIn){
          this.router.navigate(['/user'])
        } else {
          this.password = "";
          this.router.navigate(['/connexion']);
        }
      }
    )
  }

  logout(){
    this.auth.logout();
    this.message = "Vous êtes déconnectés";
  }
}
