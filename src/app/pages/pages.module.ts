import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

console.log("pages Loaded")
@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
