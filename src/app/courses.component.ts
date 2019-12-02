//1.create a component
import {Component} from "@angular/core"
import {CoursesService} from "./courses.service";
@Component({//Html mark up to render this app
    selector:'courses',
    template:`
    <h2>Courses</h2>
    {{title}}
    <img src="{{imageUrl}}"/>
<img [src]="imageUrl2"/>

    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li> 
        
    </ul>
    <ul>
       <li *ngFor="let author of authors">
            {{author}}
       </li> 
        
    </ul>
    <table>
    <tr>
    <td [attr.colspan]="colspan"><h2>{{student1}}</h2></td>
    <td [attr.colspan]="colspan"><h2>{{student2}}</h2></td>
    </tr>
    </table>
`
})


export class CoursesComponent{
    title="list of courses here";
    imageUrl="https://placekitten.com/408/287"
    imageUrl2="https://placekitten.com/200/286"
    colspan=2;
    student1="student1"
    student2="student2"
    courses;
    authors;

    constructor(service:CoursesService){
        this.courses=service.getCourses();
        this.authors=service.getAuthors();
    }
}
//2.Register this component in an module.Here currently one module its app (->app.module.ts)
//3. selector render the component in (component.html)
//attribute binding
      