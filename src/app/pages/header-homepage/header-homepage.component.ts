import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-homepage',
  templateUrl: './header-homepage.component.html',
  styleUrls: ['./header-homepage.component.scss']
})
export class HeaderHomepageComponent implements OnInit{

  isMenuOpened: boolean = false;

  ngOnInit(): void {
    
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
    console.log(this.isMenuOpened);
  }
}
