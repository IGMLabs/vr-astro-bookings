import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  @Input() public agencies :Agency[] =[];
  @Output() private reload = new EventEmitter();

  ngOnInit(): void {
  }

  public reloading = false;
  public getAgenciesLength(){
    return this.agencies.length;
  }

  public onReloadClick( list : string){
    console.log('Reloading...' + list);
    this.reloading =true;
    this.reload.emit();
  }
}
