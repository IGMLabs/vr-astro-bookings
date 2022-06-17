import { Injectable } from "@angular/core";
import { Storage } from "./storage.interface";

@Injectable()
export abstract class StorageBase implements Storage {
  public getToken() : string  {
    return '';
  }

  public setToken(token: string){}

}
