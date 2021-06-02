import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { NgModule } from '@angular/core';
import { TruckersComponent } from './truckers/truckers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'manufacturer', component: ManufacturersComponent},
  { path: 'truckers', component: TruckersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
