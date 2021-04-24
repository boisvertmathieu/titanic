import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../passengers.service';
import { Passenger } from '../interfaces/passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
})
export class PassengersComponent implements OnInit {
  title = 'List of passengers';
  passengers: Passenger[];
  fields: string[];

  constructor(private passengerService: PassengersService) {
    // Getting the passengers from the database
    this.passengerService.getPassengers().subscribe((response) => {
      console.log(response);
      this.passengers = response['passengers'];

      var temp_fields: string[] = [];
      response['fields'].forEach((field) => {
        temp_fields.push(field.name);
      });
      this.fields = temp_fields;
    });
  }

  preserveOrder(a, b) {
    return 1;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
