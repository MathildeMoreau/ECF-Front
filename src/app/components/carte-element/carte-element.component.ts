import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-element',
  templateUrl: './carte-element.component.html',
  styleUrls: ['./carte-element.component.scss']
})
export class CarteElementComponent implements OnInit{

  titleCategory!: string;
  titleDish!: string;
  description!: string;
  price!: number;
  isSpecialite!: boolean;
  isVegan !: boolean;

  ngOnInit(): void {
    this.titleCategory = "Amuses-bouches";
    this.titleDish = "Millefeuilles de légumes";
    this.description = "Fenouil, navet, potimarron et épinards";
    this.price = 8;
    this.isSpecialite = true;
    this.isVegan = false;
  }

}
