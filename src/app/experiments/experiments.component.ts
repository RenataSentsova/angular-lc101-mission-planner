import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes',
       'Water droplet podcast for grades K-5', 'Satellite launch'];

   selected: string[] = [];
   inSelected = false;
   constructor() { }

   ngOnInit() { }

    addSelected(experiment: string) {
        this.inSelected = this.selected.includes(experiment);
        if (this.inSelected) {
            const index = this.selected.indexOf(experiment);
            this.selected.splice(index, 1);
        } else {
            this.selected.push(experiment);
        }
    }
}
