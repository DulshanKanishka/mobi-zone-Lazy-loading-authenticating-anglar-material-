import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/views/aboutus/about/about.module#AboutModule',
      },
      {
        path: 'about',
        loadChildren: 'src/app/views/aboutus/about/about.module#AboutModule',
      },
      {
        path: 'stock',
        loadChildren: 'src/app/views/adding-stock/adding-stock.module#AddingStockModule',
      },
      {
        path: 'AddingStock',
        loadChildren: 'src/app/views/stock/stock.module#StockModule',
      },
      {
        path: 'ListsComponent',
        loadChildren: 'src/app/views/lists/list.module#ListModule',
      },
      {
        path: 'mobAdding',
        loadChildren: 'src/app/views/mobli-and-tablet/mobile-and-tablet.module#MobileAndTabletModule',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainNavRouterModule { }
