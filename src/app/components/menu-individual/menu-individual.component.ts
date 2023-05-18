import { Component, Input, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-menu-individual',
  templateUrl: './menu-individual.component.html',
  styleUrls: ['./menu-individual.component.scss']
})
export class MenuIndividualComponent implements OnInit{
  
  @Input() item : any = '';
  platsMenu1 !: any;
  platsMenu2 !: any;
  platsMenu3 !: any;

  constructor(
    private _platService: PlatService
  ){

  }

  ngOnInit(): void {
    this._platService.getPlatsMenu1().subscribe(
      plat => this.platsMenu1 = plat
    )
    this._platService.getPlatsMenu2().subscribe(
      plat => this.platsMenu2 = plat
    )
    this._platService.getPlatsMenu3().subscribe(
      plat => this.platsMenu3 = plat
    )
  }
}
