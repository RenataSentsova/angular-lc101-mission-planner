import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew = false;
  crew: object[] = [];

  candidates: object[] = [
    { name: "Sally Ride",
      photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg',
      info: 'Born: May 26, 1951 Encino, Los Angeles, California, U.S.'},
    { name: "Mae Jemison",
      photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg',
      info: 'Born: October 17, 1956 (age 63), Decatur, Alabama, U.S.'},
    { name: "Ellen Ochoa",
      photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg',
      info: 'Born: May 10, 1958 (age 62), Los Angeles, California, US'},
    { name: "Frederick Gregory",
      photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg',
      info: 'Born: January 7, 1941 (age 79), Washington, D.C., U.S.'},
    { name: "Guion Bluford",
      photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg',
      info: 'Born: November 22, 1942 (age 77), Philadelphia, Pennsylvania, U.S.'},
    { name: "Kjell Lindgren",
      photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg',
      info: 'Born: January 23, 1973 (age 47), Taipei, Taiwan'},
    { name: "Jeanette Epps",
      photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg',
      info: 'Born: November 3, 1970 (age 49), Syracuse, New York'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member: object) {
    this.inCrew = this.crew.includes(member);
    if (this.inCrew) {
      const index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(member);
    }
  }
}
