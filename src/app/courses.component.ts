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

    <!-- {{Add a button into the browsser}} -->

    <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
    <button type="button" class="btn "[style.backgroundColor] = "isActive ? 'yellow' : 'green' " >StyleBinding</button>

    <!-- {{Event binding & Event bubbling}} -->

    <div (click)="onDivClick()">
    <button (click) = "onClick($event)">EventBinding</button>
    </div>

    <!-- {{Event filtering}} -->

    <input (keyup)="onKeyUp($event)"/>

    <!-- {{Template variable (target) value of an input}} -->
    <input #email (keyup.enter)="onKeyUp1(email.value)"/>



    <table>
    <tr>
    <td [attr.colspan]="colspan"><h4>{{student1}}</h4></td>
    <td [attr.colspan]="colspan"><h4>{{student2}}</h4></td>
    </tr>
    </table>
`
})


export class CoursesComponent{
    title = "list of courses here";
    imageUrl =" https://placekitten.com/408/287"
    imageUrl2 = "https://placekitten.com/200/286"
    colspan = 2;
    student1 = "student1"
    student2 = "student2"
    courses;
    authors;
 
    isActive=true;

    onDivClick(){
        console.log("Div is clicked")
    }

    onClick($event){
        console.log("I am Clicked",$event)
    }

    onKeyUp($event){
        if($event.keyCode===13){
            console.log("keyUp event",$event.target.value)
        }
    }

    onKeyUp1(email){
        console.log(email);

    }

    constructor(service:CoursesService){
        this.courses = service.getCourses();
        this.authors = service.getAuthors();
    }
}
//2.Register this component in an module.Here currently one module its app (->app.module.ts)
//3. selector render the component in (component.html)
//attribute binding
//class binding

      