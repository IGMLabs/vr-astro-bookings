import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from '../about/about.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class CoreModule { }
