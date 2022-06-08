import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {


  @Input() public trips: Trip[] = [];
  @Output() private reload = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public reloading = false;


  public onReloadClick(list: string){
    this.reloading = true;
    this.reload.emit()
  }

  public getTripsLength(){
    return this.trips.length;
  }

  public getClassForStatus(status: string | undefined) {
    if (status === 'Confirmed') {
      return 'green';
    }
    return 'orange';
  }

}
