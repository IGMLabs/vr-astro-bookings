import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ApiStatus } from "./api-status.interface";

@Injectable({
  providedIn:'root'
})

export class StatusStore {

  private initialState : ApiStatus = {
    isWorking : false,
    errorMessage: ''
  };
  private state$ : BehaviorSubject<ApiStatus>= new BehaviorSubject(this.initialState);

  public setState(newState :ApiStatus){
    this.state$.next(this.initialState);
  }

  public getState$(): Observable<ApiStatus>{
    return this.state$.asObservable();
  }
}



// class Productora {
//   private statusStore = new StatusStore();


//   public hacerCosas(){
//     this.statusStore.setState({isWorking: true,errorMessage:''});
//   }

//   public descansar(){
//     this.statusStore.setState({isWorking: false,errorMessage:''});
//   }
// }

// class Consumidora{

//   private statusStore = new StatusStore();

//   public status! : ApiStatus;

//   private pintarCambios() {
//     this.statusStore.getState$().subscribe(currentState => {this.status = currentState});
//   }
// }
