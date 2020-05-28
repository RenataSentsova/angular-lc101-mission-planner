import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   allNames: string[] = [];
   cargoHold: object[] = [];
   cargoMass = 0;
   maximumAllowedMass = 2000;
   maxItems = 10;

   constructor() { }

   ngOnInit() { }
   //
   checkCount(name: string) {
       let count = 0;
       for (let i = 0; i < this.allNames.length; i++) {
           if (this.allNames[i] === name) {
               count++;
           }
       }
       return count;
   }
   // Code your addItem function here:
    addItem(equipment: object): boolean {
       if (this.checkCount(equipment['name']) < 2) {
           this.allNames.push(equipment['name']);
           this.cargoHold.push(equipment);
           this.cargoMass += equipment['mass'];
           return this.maximumAllowedMass - this.cargoMass <= 200;
       } else {
           alert (`Enough ${equipment['name']}!`);
       }
    }
    //
    remove(equipment: object) {
        let index = this.cargoHold.indexOf(equipment);
        this.cargoHold.splice(index, 1);
        this.cargoMass -= equipment['mass'];
        index = this.allNames.indexOf(equipment['name']);
        this.allNames.splice(index, 1);
    }
}
