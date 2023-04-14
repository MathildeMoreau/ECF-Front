import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit{
  isMenuOpened: boolean = false;

  ngOnInit(): void {
    
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
    console.log(this.isMenuOpened);
  }

}
