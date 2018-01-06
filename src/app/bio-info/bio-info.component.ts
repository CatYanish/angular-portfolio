import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-info',
  template: `
    <div
      fxLayoutGap.xs="0"
      fxLayout="column"
      fxLayoutAlign="center center"
      >
        <p style="max-width: 75%;">
        I'm a software engineer with passion for learning, teamwork, and coffee.
        I love to work alongside smart people to complete complex projects.
        My goal is to become a web developer on a team where people care about code, learning, and each other.
        </p>
        <p style="max-width: 75%;">
        My interests outside of technology include traveling the globe, reading good books,
        having fun learning dance with friends, speaking sort of decent Spanish, and listening to music.
        </p>
    </div>
  `,
  styleUrls: ['./bio-info.component.scss']
})
export class BioInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
