import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-landing',
  template: `
    <h1>
      Catherine Yanish | Software Engineer
    </h1>
    <div fxFlexLayout="center center">
      <img fxFlexFill src="../assets/catherineHeadshot.jpg"/>
    </div>
  `,
  styleUrls: ['./headline-landing.component.scss']
})
export class HeadlineLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
