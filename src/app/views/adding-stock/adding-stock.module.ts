import { AddingStockRouterModule } from './adding-stock-router.module';
import { AddingStockComponent } from './adding-stock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyOwnCustomMaterialModule } from 'src/app/material';


@NgModule({
  declarations: [AddingStockComponent],
  imports: [
    CommonModule,
    AddingStockRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MyOwnCustomMaterialModule
  ]
})
export class AddingStockModule { }
