import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/Menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit{

  menusList !: Menu[];

  constructor(
    private _menuService: MenuService
  ){

  }
  ngOnInit(): void {
    this._menuService.getMenus().subscribe(
      menu => this.menusList = menu
    )
  }

}
