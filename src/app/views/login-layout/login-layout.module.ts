import { LoginLayoutComponent } from './login-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutRouterModule } from './login-layout-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnCustomMaterialModule } from 'src/app/material';

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    CommonModule,
    LoginLayoutRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule
  ]
})
export class LoginLayoutModule { }
