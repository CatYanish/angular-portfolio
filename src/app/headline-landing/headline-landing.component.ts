import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-landing',
  template: `
    <div

    fxLayoutGap.xs="0"
    fxLayout="column"
    fxLayoutAlign="center center"
    >
      <img id="myHeadshot" fxFlex src="../assets/catherineHeadshot.jpg"/>
    </div>
  `,
  styleUrls: ['./headline-landing.component.scss']
})
export class HeadlineLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
