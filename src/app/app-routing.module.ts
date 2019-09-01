import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { ProdComponent } from './prod.component';
import { Prod1Component } from './prod1.component';
import { ProductDetailGuardService } from './product-detail-guard.service';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'products', component: ProdComponent },
  { path: 'products/:name', component: Prod1Component,
    canActivate: [ProductDetailGuardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
