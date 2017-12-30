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
        I'm a software engineer with a lust for life and learning.
        Deeply collaborative, I love to work with other people to complete projects and work under pressure, and for fun.
        I'm a high intensity javascript developer, with special love of front-end frameworks like Angular, AngularJS, and React.
        </p>
        <p style="max-width: 75%;">
        My interests outside of technology include traveling the globe (18 countries visited so far),
        and having fun learning dance with friends, especially salsa and swing.
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
