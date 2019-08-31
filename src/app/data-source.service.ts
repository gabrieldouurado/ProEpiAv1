import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItensData } from './itensData'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  apiurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateIten(data): Observable<ItensData> {
    return this.http.post<ItensData>(this.apiurl + '/itens/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // GET
  GetIten(id): Observable<ItensData> {
    return this.http.get<ItensData >(this.apiurl + '/itens/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetItens(): Observable<ItensData> {
    return this.http.get<ItensData>(this.apiurl + '/itens/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

   // PUT
   UpdateIten(id, data): Observable<ItensData> {
    return this.http.put<ItensData>(this.apiurl + '/itens/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteIten(id){
    return this.http.delete<ItensData>(this.apiurl + '/itens/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
