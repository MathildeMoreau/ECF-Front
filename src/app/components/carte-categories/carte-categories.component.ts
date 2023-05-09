import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/Categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-carte-categories',
  templateUrl: './carte-categories.component.html',
  styleUrls: ['./carte-categories.component.scss']
})
export class CarteCategoriesComponent implements OnInit {

  categoriesList !: Categorie[];

  constructor(
    private _categorieService: CategorieService
  ){

  }
  ngOnInit(): void {
    this._categorieService.getCategories()
      .subscribe(cat => this.categoriesList = cat)
      console.log(this.categoriesList)
  }

}
