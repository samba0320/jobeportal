import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { MarketingComponent } from './marketing/marketing.component';

const routes: Routes = [
  {
    path:"" ,component:MarketingComponent,
  },

  {
    path:"business",component:BusinessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
