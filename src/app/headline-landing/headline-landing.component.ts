import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-landing',
  template: `
    <h1>
      Catherine Yanish | Software Engineer
    </h1>
    <img width="400" src="../assets/catherineHeadshot.jpg"/>
  `,
  styleUrls: ['./headline-landing.component.scss']
})
export class HeadlineLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
