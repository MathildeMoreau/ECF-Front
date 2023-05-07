import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-chef-specialite',
  templateUrl: './chef-specialite.component.html',
  styleUrls: ['./chef-specialite.component.scss']
})
export class ChefSpecialiteComponent implements OnInit{

  platsList!: Plat[];
  
  constructor(
    private _platService: PlatService
  ){

  }
  ngOnInit(): void {
    this._platService.getPlatsSpecialiteChef()
      .subscribe(plat => this.platsList = plat);
    console.log(this.platsList);
  }

}
