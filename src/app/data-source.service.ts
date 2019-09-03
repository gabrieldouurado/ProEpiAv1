import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItensData } from './itensData'
import { SubItensData } from './subItensData'
import { ItensSubItensData } from './itenSubitenData'
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


  /////////////ITENS///////////////
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
  //////////////END ITENS////////////////

  ////////////SUBITENS//////////////////
  // POST
  CreateSubIten(data): Observable<SubItensData> {
    return this.http.post<SubItensData>(this.apiurl + '/subitens/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  // GET
  GetSubIten(id): Observable<SubItensData> {
    return this.http.get<SubItensData>(this.apiurl + '/subitens/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetSubItens(): Observable<SubItensData> {
    return this.http.get<SubItensData>(this.apiurl + '/subitens/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

   // PUT
   UpdateSubIten(id, data): Observable<SubItensData> {
    return this.http.put<SubItensData>(this.apiurl + '/subitens/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteSubIten(id){
    return this.http.delete<SubItensData>(this.apiurl + '/subitens/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  ////////////////END SUBITENS///////////////////

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

  /////////////RELACOES//////////////
  GetItenSubIten(): Observable<ItensSubItensData> {
    return this.http.get<ItensSubItensData>(this.apiurl + '/itemsubitens/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  ////////////ADD SUBITENS FOR ITENS/////////////
  CreateSubitenForIten(data): Observable<ItensSubItensData> {
    return this.http.post<ItensSubItensData>(this.apiurl + '/itemsubitens/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  /////////////DELETE SUBITEN FOR ITEN///////////
  DeleteSubitenForIten(id){
    return this.http.delete<ItensSubItensData>(this.apiurl + '/itemsubitens/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

}
