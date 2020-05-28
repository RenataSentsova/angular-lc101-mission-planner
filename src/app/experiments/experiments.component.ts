import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {name: 'Mars soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'}
  ];
  experimentBeingEdited: object = null;
  constructor() { }

  getAllNames() {
    let res = [];
    for (let experiment of this.experiments) {
      res.push(Object.values(experiment)[0]);
    }
    return res;
  }

  add(newname: string) {
    const names = this.getAllNames();
    console.log(names);
    if (!names.includes(newname) && newname.replace(/\s/g, '') !== '') {
      this.experiments.push({name: newname});
    } else {
      alert('You cannot enter a duplicate! Name should not contain only whitespaces!');
    }
  }

  remove(member: object) {
    const index = this.experiments.indexOf(member);
    this.experiments.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
  }

  save(name: string, experiment: object) {
    experiment[name] = name;
    this.experimentBeingEdited = null;
  }

  ngOnInit() {
  }

}
