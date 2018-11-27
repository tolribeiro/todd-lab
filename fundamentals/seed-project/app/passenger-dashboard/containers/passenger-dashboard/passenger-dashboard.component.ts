import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index">
                <span 
                    class="status"
                    [ngClass]="{ 
                    'checked-in' : passenger.checkedIn,
                    'checked-out' : !passenger.checkedIn }"></span>
                {{ i }}: {{ passenger.fullname }}
                <div class="date">
                    Check in date: {{ passenger.checkInDate | date: 'yMMMMd' | uppercase}}
                </div>
                <div class="children">
                    Children: {{ passenger.children?.length || 0 }}
                </div>
                </li>
            </ul>
        </div>
    `
})

export class PassengerDashboardComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [{ name: 'Thiago', age: 27 }]
      }, {
        id: 2,
        fullname: 'Newton',
        checkedIn: true,
        checkInDate: 1490742000000
      }, {
        id: 3,
        fullname: 'Hawking',
        checkedIn: false,
        checkInDate: 1490742000000
      }, {
        id: 4,
        fullname: 'Lattes',
        checkedIn: true,
        checkInDate: 1490742000000
      }, {
        id: 5,
        fullname: 'Einstein',
        checkedIn: false,
        checkInDate: 1490742000000
      }]
}