
import {SchoolService} from "./SchoolService",
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'school',
  template: `{{title}}
  <ol *ngFor="let school of schools">
  <li>school</li>
  </ol>
  `,
  
})
export class SchoolComponent  {
  title=" The institutions";
  schools;

  constructor(service:SchoolService) { 
    this.schools=service.getSchool();
  }

  

}
