import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
 
  { path: 'AllPatients', component:ProductListComponent },
  { path: 'products/:id', component:ProductDetailsComponent },
  { path: 'create', component:ProductCreateComponent },
  { path: 'DashBoard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
