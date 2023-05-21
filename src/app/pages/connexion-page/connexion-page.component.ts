import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeService } from 'src/app/services/employe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit{
  auth !: AuthService;
  userData: any;

  constructor(
    private router : Router,
    private clientService : ClientService,
    private _builder: FormBuilder,
    private employeService: EmployeService,
    private _snackBar: MatSnackBar
  ){
  }
  ngOnInit(): void {
    sessionStorage.clear();

  }

  public goToAdminPanel(): void{
    this.router.navigateByUrl('http://quai-antiques.studiomdev.fr/admin');
  }

  login(){
    if(this.loginForm.valid){
      this.employeService.getEmployeByMail(this.loginForm.value.email).subscribe(
        res => {
          this.userData = res;
          if(this.userData[0].password === this.loginForm.value.password){
            sessionStorage.setItem('email', this.userData[0].email);
            sessionStorage.setItem('id', this.userData[0].id);
            sessionStorage.setItem('nom', this.userData[0].nom);
            sessionStorage.setItem('prenom', this.userData[0].prenom);
            sessionStorage.setItem('admin', this.userData[0].admin);
            this.router.navigate(['/user']);
          } else {
            this._snackBar.open(`Identifiant ou mot de passe incorrect`, '🛑', {duration: 3000});
          }
        })
      this.clientService.getClientByMail(this.loginForm.value.email).subscribe(
        res => {
          this.userData = res;
          if(this.userData[0].password === this.loginForm.value.password){
            sessionStorage.setItem('email', this.userData[0].email);
            sessionStorage.setItem('id', this.userData[0].id);
            sessionStorage.setItem('nom', this.userData[0].nom);
            sessionStorage.setItem('prenom', this.userData[0].prenom);
            sessionStorage.setItem('nb_convives', this.userData[0].nb_convives);
            this.router.navigate([`/user/${sessionStorage.getItem('id')}`]);
          } else {
            this._snackBar.open(`Identifiant ou mot de passe incorrect`, '🛑', {duration: 3000});
          }
        }
      )
    }
  }

  loginForm = this._builder.group({
    email: this._builder.control('', Validators.required),
    password: this._builder.control('', Validators.required)
  })
}
