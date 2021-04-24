import { BasePassenger } from './base-passenger';

export class Passenger implements BasePassenger {
  id: number;
  survived: number;
  pclass: number;
  name: string;
  sex: string;
  age: number;
  sibsp: number;
  parch: number;
  ticket: string;
  fare: number;
  cabin: string;
  embarked: string;

  constructor(passenger: BasePassenger) {
    this.id = passenger.id;
    this.survived = passenger.survived;
    this.pclass = passenger.pclass;
    this.name = passenger.name;
    this.sex = passenger.sex;
    this.age = passenger.age;
    this.sibsp = passenger.sibsp;
    this.parch = passenger.parch;
    this.ticket = passenger.ticket;
    this.fare = passenger.fare;
    this.cabin = passenger.cabin;
    this.embarked = passenger.embarked;
  }
}
