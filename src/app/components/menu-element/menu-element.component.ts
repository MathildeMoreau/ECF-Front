import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss']
})
export class MenuElementComponent implements OnInit{

  menuTitle !: string;
  entree1 !: string;
  descEntree1 !: string;

  entree2 !: string;
  descEntree2 !: string;

  platTitle1 !: string;
  descPlat1 !: string;

  platTitle2 !: string;

  dessert1 !: string;
  descDessert1 !: string;

  dessert2 !: string;

  price !: number;


  ngOnInit(): void {
    this.menuTitle = "Menu Découverte";
    this.entree1 = "Foie gras de canard";
    this.descEntree1 = "Gelée de Mandarines et Safran, Briochine aux Fruits Confits";
    this.platTitle1 = "Filet de Caille Rôtie";
    this.descPlat1 = "Légumes Anciens et Pralin de Graines, Jus de Poulet";
    this.dessert1 = "Tiramisu";
    this.descDessert1 = "Café, Cognac et Vanille de Madagascar";

    this.price = 70;
  }

}
