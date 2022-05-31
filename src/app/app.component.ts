import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Astro Bookings';
  public  subtitle = "Welcome on board";
  public author = "Vicente Rodriguez";
  public authorURL = "https://www.google.com";
}
