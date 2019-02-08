import { MobliAndTabletComponent } from './mobli-and-tablet.component';
import { MobileAndTabletRouterModule } from './mobile-and-tablet-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from 'src/app/material';


@NgModule({
  declarations: [MobliAndTabletComponent],
  imports: [
    CommonModule,
    MobileAndTabletRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule
  ]
})
export class MobileAndTabletModule { }
