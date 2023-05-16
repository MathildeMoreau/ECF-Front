import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/Categorie';
import { Plat } from 'src/app/models/Plat';
import { CategorieService } from 'src/app/services/categorie.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-carte-element',
  templateUrl: './carte-element.component.html',
  styleUrls: ['./carte-element.component.scss']
})
export class CarteElementComponent implements OnInit{

  platsList !: Plat[];
  PlatByCategorie !: Plat;
  @Input() item : any = '';

  constructor(
    private _platService: PlatService
  ){

  }

  ngOnInit(): void {
    this._platService.getPlatsByCategorie(this.item).subscribe(
      plat => this.platsList = plat
    )
  }


}
