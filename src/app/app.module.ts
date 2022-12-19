import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketingComponent } from './marketing/marketing.component';
import {  RouterModule,Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';


const routes:Routes=[]


@NgModule({
  declarations: [
    AppComponent,
    MarketingComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
