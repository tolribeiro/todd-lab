import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
// Used for us to do some two-way data binding
// Two-way data binding is usually OK when you got a local component;
// However, if you want to emit a change, you should do use one-way data flow
// and emit the change with an event listener; 

// 'Component' -> decorator
// The Component is a function, but as it has a decorator
// which is a TS feature, to register with Angular just use @

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children?: Child[]
}

@Component({
  selector: 'app-root', 
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>`
})

// Interpolation {{}}

// It holds metadata for a particular component (in this case App Component)

export class AppComponent {
}