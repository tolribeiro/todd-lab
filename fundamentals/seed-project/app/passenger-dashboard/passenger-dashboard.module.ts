import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //ngIf, ngFor etc
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-details/passenger-details.component';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PassengerDashboardComponent
    ]
})

export class PassengerDashboardModule {
    
}