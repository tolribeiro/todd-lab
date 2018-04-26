// If we want to compile an Angular application on the browser, we do:
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// This contains the client-side code that processes our templates, all of our bindings
// and allows us to do dependency injection

import { AppModule } from './app/app.module';

// It's not a decorator, it's a function
platformBrowserDynamic().bootstrapModule(AppModule);

// So the flow of CREATING and BOOTSTRAPPING an Angular application goes as follows (from the TOP):

// 1 - We have our App Component, registering as an app-root;
// 2 - That gets placed into our index.html <app-root></app-root>
// 3 - To bootstrap this, we need to import the component, register it in a module; tell the module
//     to bootstrap the component;
// 4 - In our main.ts, we tell the compiler to bootstrap our application module (AppModule)