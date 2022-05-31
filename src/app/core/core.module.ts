import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }
