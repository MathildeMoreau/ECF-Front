import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/Categorie';
import { Plat } from 'src/app/models/Plat';
import { CategorieService } from 'src/app/services/categorie.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-carte-page',
  templateUrl: './carte-page.component.html',
  styleUrls: ['./carte-page.component.scss']
})
export class CartePageComponent implements OnInit{
  categoriesList !: Categorie[];
  platsList !: Plat[];
  apiPathToDish !: any;

  constructor(
    private _categorieService: CategorieService,
    private _platService: PlatService,
    private _http : HttpClient
  ){

  }
  ngOnInit(): void {
    this._categorieService.getCategories()
      .subscribe(cat => this.categoriesList = cat)

    this._platService.getPlats()
      .subscribe(
        plat => this.platsList = plat)

    }
}
