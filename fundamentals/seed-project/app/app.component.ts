import { Component } from '@angular/core'; 

// 'Component' -> decorator
// The Component is a function, but as it has a decorator
// which is a TS feature, to register with Angular just use @
@Component({
  selector: 'app-root', // creates the element in the HTML
  styleUrls: ['app.component.scss'], // array that contains a reference to a scss file
  template: `
    <div>
    {{ title }} 
    </div>
  ` // ES6 feature that allows multiple line strings
  // We can also use a templateUrl and reference the file
})

// Interpolation {{}}

// It holds metadata for a particular component (in this case App Component)

export class AppComponent {
  // We can do just that, since we are using TS
  title: string; // setting the static property
  // However, we could also do
  constructor() {
    this.title = 'Angular Lab';
  }
}