import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruitmentSolutionComponent } from './recruitment-solution/recruitment-solution.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobForFreshersComponent } from './job-for-freshers/job-for-freshers.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruitmentSolutionComponent,
    PageNotFoundComponent,
    JobForFreshersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
