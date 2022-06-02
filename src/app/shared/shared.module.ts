import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList
  ],
  imports: [
    CommonModule, RouterModule,ReactiveFormsModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
