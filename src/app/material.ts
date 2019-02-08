import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule, MatProgressSpinnerModule, MatCardModule,
    MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
    MatPaginatorModule, MatTableModule, MatTooltipModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule,
    MatIconModule, MatListModule, MatProgressSpinnerModule, MatCardModule,
    MatFormFieldModule, MatRadioModule, MatSelectModule, MatInputModule,
    MatPaginatorModule, MatTableModule, MatTooltipModule
    ],
})
export class MyOwnCustomMaterialModule { }
