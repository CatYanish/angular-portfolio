import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


// angular material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeadlineLandingComponent } from './headline-landing/headline-landing.component';
import { BioInfoComponent } from './bio-info/bio-info.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterContactMeComponent } from './footer-contact-me/footer-contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineLandingComponent,
    BioInfoComponent,
    FooterContactMeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
