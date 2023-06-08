import { Component } from "@angular/core";


//cpmponent decorator
@Component({
  // write selector and template
  selector : 'test-app',
  templateUrl : './app.component.html'
  // template : `<h1> Hello {{name}} </h1>`
  // {{name}} this is retriving data fromm class AppComponent (interpolation)
})

// we use export so that we can use the class for other components
export class AppComponent
{
  name: string= "Welcome to Angular8";
  // data member : datatype
}