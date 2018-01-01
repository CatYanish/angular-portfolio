import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  template: `
    <p>
      my-projects works!
    </p>
    <img src="../assets/GroupProjectPhoto.png"/>
    <img src="../assets/SoloProjectPhoto.png"/>
  `,
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
