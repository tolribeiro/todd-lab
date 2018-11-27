import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //ngIf, ngFor etc
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
    declarations: [
        PassengerDashboardComponent
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