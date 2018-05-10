import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
// Used for us to do some two-way data binding
// Two-way data binding is usually OK when you got a local component;
// However, if you want to emit a change, you should do use one-way data flow
// and emit the change with an event listener; 

// 'Component' -> decorator
// The Component is a function, but as it has a decorator
// which is a TS feature, to register with Angular just use @
@Component({
  selector: 'app-root', // creates the element in the HTML
  styleUrls: ['app.component.scss'], // array that contains a reference to a scss file
  template: `
    <div>
      {{ title + '!'}} 
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <div>
        {{ numberOne + numberTwo }}
      </div>
      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>
      <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
        (blur)="handleBlur($event)">
      <input 
        type="text" 
        [(ngModel)]="last">
      <div>{{ name }}</div>
      <div>{{ last }}</div>
      <button (click)="handleClickRef(username.value)"> 
        Get Value
      </button>

      <input type="text" #username>

      <div *ngIf="name.length">
        Searching for... {{ name }} 
      </div>
    </div>
  ` // ES6 feature that allows multiple line strings
  // We can also use a templateUrl and reference the file
  // {{ expression }}

  // A Ref allows us to create a reference to a particular DOM node 
  // which is accessible anywhere in our template
})

// Interpolation {{}}

// It holds metadata for a particular component (in this case App Component)

export class AppComponent {
  // Obs.: with expressions we can mix and match the types we want to use
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string = 'img/logo.svg';
  name: string = '';  
  last: string = 'Thiago';
  // We can do just that, since we are using TS
  title: string; // setting the static property
  // However, we could also do
  constructor() {
    this.title = 'Angular Lab';
  }
  // Interpolation allows to essentially bind specific properties

  // Property binding is the square bracket notation that allows us to 
  // bind to particular properties on an element.

  // Now we're going to learn how to use event binding;
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleChange(value: any) {
    this.name = value;
  }

  handleClick() {
    this.name = 'Ribeiro';
  }

  handleClickRef(value: string) {
    console.log(value);
  }
}