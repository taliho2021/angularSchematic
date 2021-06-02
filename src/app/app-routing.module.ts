import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ImportTableComponent } from './import-table/import-table.component';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'address', component:AddressComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'drag-drop', component:DragDropComponent},
  {path: 'mat-tree', component: MatTreeComponent},
  {path: 'navi', component: NaviComponent},
  {path: 'import-table', component: ImportTableComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
