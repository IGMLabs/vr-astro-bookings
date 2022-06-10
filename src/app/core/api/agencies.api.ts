import { Injectable } from "@angular/core";
import { Agency } from "./agency.interface";
import { HttpClient } from "@angular/common/http";
import { CrudApi } from "./crud";

@Injectable({
  providedIn: 'root',
}
)
export class AgenciesApi extends CrudApi<Agency> {
  constructor(http: HttpClient) {
    super(http, 'agencies');
  }

}

