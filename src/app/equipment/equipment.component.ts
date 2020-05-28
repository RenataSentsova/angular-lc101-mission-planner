import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: object[] = [
    {name: 'Habitat dome'},
    {name: 'Drones'},
    {name: 'Food containers'},
    {name: 'Oxygen tanks'}
  ];
  equipmentBeingEdited: object = null;
  constructor() { }

  getAllNames() {
    let res = [];
    for (let equipment of this.equipments) {
      res.push(Object.values(equipment)[0]);
    }
    return res;
  }

  add(newname: string) {
    const names = this.getAllNames();
    console.log(names);
    if (!names.includes(newname) && newname.replace(/\s/g, '') !== '') {
      this.equipments.push({name: newname});
    } else {
      alert('You cannot enter a duplicate! Name should not contain only whitespaces!');
    }
  }

  remove(member: object) {
    const index = this.equipments.indexOf(member);
    this.equipments.splice(index, 1);
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
  }

  save(name: string, equipment: object) {
    equipment[name] = name;
    this.equipmentBeingEdited = null;
  }

  ngOnInit() {
  }

}
