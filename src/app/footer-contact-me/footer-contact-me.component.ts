import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-contact-me',
  template: `
    <p>
      <a href="https://www.linkedin.com/in/catherine-yanish-64a7a264/">LinkedIn</a>
      <a href="https://github.com/CatYanish" fxLayoutAlign.xs="center center">GitHub</a>
      <a href="mailto:catherineyanish@gmail.com" fxLayoutAlign.xs="center center" class="emailContact">catherineyanish@gmail.com</a>
    </p>
  `,
  styleUrls: ['./footer-contact-me.component.scss']
})
export class FooterContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
