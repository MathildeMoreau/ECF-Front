import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{

  nom !: string;
  telephone !: string;
  email !: string;
  message !: string;

  constructor(
    private _formBuilder : FormBuilder,
    private _email: EmailService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ){
  }

  ngOnInit(): void {
  }

  sendForm(message: string, contactInfos: {nom: string, telephone: number, email: string, message: string}){
    this._snackBar.open(message, '👌', {duration: 5000});
    this.nom = "", this.telephone = "", this.email = "", this.message = "";
    this._router.navigate(['/contact']);
  }

}
