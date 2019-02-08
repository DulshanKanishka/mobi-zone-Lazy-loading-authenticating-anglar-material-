import { ListsComponent } from './lists.component';
import { ListRouterModule } from './list-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from 'src/app/material';


@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule
  ]
})
export class ListModule { }
