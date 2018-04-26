// Now that we've imported it, time to create the module
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 
import { CommonModule } from '@angular/common'
// When we're getting into directives and such, we'll use common

// The best way to think about a module is similarly to import and include statements
import { AppComponent } from './app.component';

// A module is nothing more than a container that has all of our components and any
// dependencies that that we need such as services for HTTP etc.

// A special decorator
@NgModule({
  // To actually register the component in the model, we need a declarator
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})

// IMPORTANT: Angular is split up into multiple modules such as the Forms, or HTTP..each
// one lives inside a different module.

// The NgModule and the Component decorators we've used live inside the core module.

export class AppModule {}