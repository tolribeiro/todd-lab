import { Component } from '@angular/core'; 

// 'Component' -> decorator
// The Component is a function, but as it has a decorator
// which is a TS feature, to register with Angular just use @
@Component({
  selector: 'app-root', // creates the element in the HTML
  styleUrls: ['app.component.scss'], // array that contains a reference to a scss file
  template: `
    <div>
      {{ title + '!'}} 
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
    </div>
  ` // ES6 feature that allows multiple line strings
  // We can also use a templateUrl and reference the file
  // {{ expression }}
})

// Interpolation {{}}

// It holds metadata for a particular component (in this case App Component)

export class AppComponent {
  // Obs.: with expressions we can mix and match the types we want to use
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  // We can do just that, since we are using TS
  title: string; // setting the static property
  // However, we could also do
  constructor() {
    this.title = 'Angular Lab';
  }
  // Interpolation allows to essentially bind specific properties
}