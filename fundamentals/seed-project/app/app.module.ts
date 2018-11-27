import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser' 
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // Custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}