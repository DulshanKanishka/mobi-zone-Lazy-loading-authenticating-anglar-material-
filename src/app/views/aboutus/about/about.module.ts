import { AboutComponent } from './about.component';
import { AboutRouterModule } from './about-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from 'src/app/material';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule
  ]
})
export class AboutModule { }
