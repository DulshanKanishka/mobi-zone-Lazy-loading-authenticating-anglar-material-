import { NavComponent } from './Main/nav/nav.component';
import { AuthService } from './services/auth-service/auth.service';
import { AuthGuard } from './services/auth-service/auth.guard';
import { MyOwnCustomMaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSignService } from './services/adminSign.service';
import { BuyingService } from './services/buying.service';
import { HomeListService } from './services/homeList.service';
import { PhoneDetailsService } from './services/phone-details.service';
import { ShopService } from './services/shop.service';
import { SignupService } from './services/SignUp.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
    // NavComponent
    // NavComponent,
    // AddingStockComponent,
    // ListsComponent,
    // StockComponent,
    // AboutComponent,
    // MobliAndTabletComponent,
    // LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    // MyOwnCustomMaterialModule,
    // FormsModule,
    // ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminSignService,
    BuyingService,
    HomeListService,
    PhoneDetailsService,
    ShopService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
