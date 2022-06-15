import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, pipe, tap,delay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StatusStore } from './status.store';


export abstract class CrudApi <T> {
   protected url = environment.apiUrl + this.endPoint + '/';

  private statusPipe = pipe(
    tap(() => this.notifyIdle()),
    catchError((err) => {
      this.notifyError(err.message);
      return of(err);
    })
  );

  constructor(protected http: HttpClient, private endPoint: string, protected statusStore: StatusStore) {}

  public getAll$() {
    return this.http.get<T[]>(this.url).pipe(this.statusPipe);
  }

  public getById$(id: string) {
    return this.http.get<T>(this.url + id).pipe(this.statusPipe);
  }

  public post$(payload: Partial<T>) {
    return this.http.post<T>(this.url, payload).pipe(this.statusPipe);
  }

  public put$(id: string, payload: Partial<T>) {
    return this.http.put<T>(this.url + id, payload).pipe(this.statusPipe);
  }

  public delete$(id: string) {
    return this.http.delete<T>(this.url + id).pipe(this.statusPipe);
  }

  private notifyWorking() {
    this.statusStore.setState({ isWorking: true, errorMessage: '' });
  }
  private notifyIdle() {
    this.statusStore.setState({ isWorking: false, errorMessage: '' });
  }
  private notifyError(message: string) {
    console.warn({ isWorking: false, errorMessage: message });
    this.statusStore.setState({ isWorking: false, errorMessage: message });
  }

  public getByText$(text : string |null) : Observable<T[]>{
    if (text ===  null || text == '') return this.getAll$();
    return this.http.get<T[]>(this.url + '?q=' +text ).pipe(delay(3000));
  }
}
