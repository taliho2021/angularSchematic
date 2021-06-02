import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { TruckersComponent } from './truckers/truckers.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ManufacturersComponent,
    TruckersComponent  
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CustomersModule { }
