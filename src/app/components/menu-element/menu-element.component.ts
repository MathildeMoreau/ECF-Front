import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/Menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss']
})
export class MenuElementComponent implements OnInit{

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
