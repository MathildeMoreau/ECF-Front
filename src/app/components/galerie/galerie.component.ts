import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/Plat';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit{

  platsList!: Plat[];

  constructor(
    private _platService:PlatService
  ){

  }

  ngOnInit(): void {
    this._platService.getPlats()
      .subscribe(plat => this.platsList = plat);
    console.log(this.platsList);
  }

}
