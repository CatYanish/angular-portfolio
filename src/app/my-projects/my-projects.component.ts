import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  template: `
    <mat-card>
      <h1 fxLayoutAlign="center center">
        My Projects
      </h1>
      <div fxLayout="row">
        <img src="../assets/GroupProjectPhoto.png"/>
        <p>
          Mobility For All
        </p>
      </div>
    </mat-card>
    <mat-card>
      <img src="../assets/SoloProjectPhoto.png"/>
    </mat-card>
  `,
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
