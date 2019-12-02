import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  getsSchool(){
    return["school1","school2","school3"]

  }

}
