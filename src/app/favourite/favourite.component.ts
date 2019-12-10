import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
 
})
export class FavouriteComponent implements OnInit {
  @Input ('isFavorite')isSelected:boolean; //input property

title: string;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected=!this.isSelected

  }

}
