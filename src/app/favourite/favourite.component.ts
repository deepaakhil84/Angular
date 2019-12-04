import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input()isFavorite:boolean; //input property

@Input() title: string;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite=!this.isFavorite

  }

}
