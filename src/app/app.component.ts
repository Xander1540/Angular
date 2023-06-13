import { Component } from "@angular/core";


//cpmponent decorator
@Component({
  // write selector and template
  selector : 'test-app',
  //templateUrl : './app.component.html'
  template : 
  `
    <h2> Hello {{name}} </h2>
    <h2>{{4+8}}</h2>
    <h1>{{ "XANDER " + name }}</h1>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ welcomeMessage() }}</h2>
    <h2>{{ a }}</h2>
    <button style='color: white; background-color: black' [style.font-size.px]="buttonTextsize" [style.font-weight]="applyBold"> Submit </button>

    <input [id]="myId" type="text" value="xander"/>



  `
  //<input [id]="myId" type="text" value="xander"/> we can do this by using keyword bind-id="myId"
  // style binding 
  // {{name}} this is retriving data from class AppComponent (interpolation)
})

// we use export so that we can use the class for other components
export class AppComponent
{
  name: string= "welcome to angular8";
  // data member : datatype
  a: number= 2+4;

  buttonTextsize: number = 20;
  applyBold: string = 'bold';

  // multiple inline style binding
  applyStyles(){  //method
      var myStyles= { // object
          // key value pairs
        'font-size.px' : this.buttonTextsize,  
      };
      return myStyles;
      }

  public myId="testId";

  //method 
  public welcomeMessage(){
    return "Dear User " + this.name;
  }
}