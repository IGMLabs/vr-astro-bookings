import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactForm } from './contact.form';
import { ContactPage } from './contact.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactForm,
    ContactPage
  ],
  imports: [
    CommonModule,
    ContactRoutingModule, ReactiveFormsModule,SharedModule
  ]
})
export class ContactModule { }
