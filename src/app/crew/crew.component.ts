import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: 'Eileen Collins', firstMission: false},
    {name: 'Mae Jemison', firstMission: false},
    {name: 'Ellen Ochoa', firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  getAllNames() {
    let res = [];
    for (let member of this.crew) {
      res.push(Object.values(member)[0]);
    }
    return res;
  }

  add(memberName: string, isFirst: boolean) {
    const names = this.getAllNames();
    console.log(names);
    if (!names.includes(memberName) && memberName.replace(/\s/g, '') !== '') {
      this.crew.push({name: memberName, firstMission: isFirst});
    } else {
      alert('You cannot enter a duplicate! Name should not contain only whitespaces!');
    }
  }

  remove(member: object) {
    const index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member[name] = name;
    this.memberBeingEdited = null;
  }
}
