//1.create a component
import {Component} from "@angular/core"
@Component({
    selector:'courses',
    template:`<h2>Courses</h2> {{title()}}`//Html mark up to render this app
})

export class CoursesComponent{
    title="list of courses here";
    get Title(){
return this.title;
    }

}
//2.Register this component in an module.Here currently one module its app (->app.module.ts)
//3. selector render the component in (component.html)