import { SchoolService } from './../school.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'school',
  template: `{{title}},
  <ol *ngFor="let school of schools ">
  
  <li>{{school}}</li>
  </ol>
  `,
  
})
export class SchoolComponent  {
  title=" The institutions";
  counter=0;
  schools;

  
  constructor(service:SchoolService) { 
    this.schools=service.getsSchool();
  }

  

}
