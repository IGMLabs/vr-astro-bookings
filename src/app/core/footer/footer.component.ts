import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public title = 'Astro Bookings';
  public  subtitle = "Welcome on board";
  public author = "Vicente Rodriguez";
  public authorURL = "https://www.google.com";
}
