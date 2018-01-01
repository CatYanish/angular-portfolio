import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-contact-me',
  template: `
    <p fxLayout.xs="column" fxLayoutAlign="center center" fxLayoutGap="10px">
      <a href="https://www.linkedin.com/in/catherine-yanish-64a7a264/">LinkedIn</a>
      <a href="https://github.com/CatYanish">GitHub</a>
      <a href="mailto:catherineyanish@gmail.com" class="emailContact">catherineyanish@gmail.com</a>
    </p>
  `,
  styleUrls: ['./footer-contact-me.component.scss']
})
export class FooterContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
