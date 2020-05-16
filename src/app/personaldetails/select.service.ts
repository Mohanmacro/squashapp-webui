import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';

@Injectable()
export class SelectService {

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'Brazil'),
     new Country(3, 'Switzerland' ),
     new Country(4, 'Japan'),
     new Country(5, 'Canada' ),
     new Country(6, 'Germany'),
    ];
  }
  
  getStates() {
   return [
     new State(1, 'USA', 'Arizona' ),
     new State(2, 'USA', 'Alaska' ),
     new State(3, 'USA', 'Florida'),
     new State(4, 'USA', 'Hawaii'),
     new State(5, 'Brazil', 'Sao Paulo' ),
     new State(6, 'Brazil', 'Rio de Janeiro'),
     new State(7, 'Brazil', 'Minas Gerais' ), 
     new State(8,  'Switzerland', 'Jura' ),
     new State(9,  'Switzerland', 'Glarus'),
     new State(10,  'Switzerland', 'Bern'),
     new State(11,  'Switzerland', 'Ticino' ),
     new State(12,  'Switzerland', 'Uri'),
     new State(13, 'Japan', 'Mie' ),
     new State(14, 'Japan', 'Kochi' ),
     new State(15, 'Japan', 'Koyoto' ),
     new State(16, 'Japan', 'Nara' ),
     new State(17, 'Japan', 'Fukui' ),
     new State(18, 'Japan', 'Akita' ),
     new State(19, 'Canada', 'Alberta' ),
     new State(20, 'Canada', 'Ontario' ),
     new State(21, 'Canada', 'Quebec' ),
     new State(22, 'Canada', 'Yukon' ),
     new State(23, 'Germany', 'Berlin' ),
     new State(24, 'Germany', 'Hesse' ),
     new State(25, 'Germany', 'Saarland' ),
    ];
  }

}