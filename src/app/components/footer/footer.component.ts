import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  infos : any;

  constructor(
    private _restaurantService: RestaurantService
  ){

  }

  ngOnInit(): void {
    this.getInfos();
    
  }

  getInfos(){
    this._restaurantService.getInfos().subscribe(
      info => this.infos = info
    )
  }

}
