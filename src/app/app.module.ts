import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsforFreshersComponent } from './jobsfor-freshers/jobsfor-freshers.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsforFreshersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
