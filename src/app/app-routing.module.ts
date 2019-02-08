import { LoginLayoutModule } from './views/login-layout/login-layout.module';
// import { HomeLayoutModule } from './Main/main-nav.module';
import { AuthGuard } from './services/auth-service/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {
    path: 'home',
    loadChildren: './Main/main-nav.module#HomeLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './views/login-layout/login-layout.module#LoginLayoutModule'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     {path: 'dashboard' ,
  //       component: DashboardComponent},
  //     {
  //       path: 'manage-customers',
  //       component: ManageCustomersComponent
  //
  //     },
  //     {
  //       path: 'manage-items',
  //       component: ItemsComponent
  //
  //     },
  //     {
  //       path: 'place-order',
  //       component: PlaceOrderComponent
  //     },
  //
  //     {
  //       path: 'main',
  //       pathMatch : 'full',
  //       redirectTo: '/dashboard'
  //     }
  //   ]
  //
  // },

                // {
                //   path: 'about',
                //   component: AboutComponent,
                // },
                // {
                //   path: 'stock',
                //   component: StockComponent,
                // },
                // {
                //   path: 'mobAdding',
                //   component: MobliAndTabletComponent,
                // },
                // {
                //   path: '',
                //   component: AddingStockComponent,
                // },
                // {
                //   path: 'AddingStock',
                //   component: AddingStockComponent,
                // },
                // {
                //   path: 'ListsComponent',
                //   component: ListsComponent,
                // },
