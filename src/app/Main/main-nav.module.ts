// import { MyOwnCustomMaterialModule } from './../material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { MainNavRouterModule } from './main-nav-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../material';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainNavRouterModule,
    MyOwnCustomMaterialModule
  ]
})
export class HomeLayoutModule { }
