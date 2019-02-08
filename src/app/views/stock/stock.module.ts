import { StockComponent } from './stock.component';
import { StockRouterModule } from './stock-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from 'src/app/material';


@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    StockRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule
  ]
})
export class StockModule { }
