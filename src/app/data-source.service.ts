import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private http: HttpClient) { }

  GetItens(){
    return fetch('http://localhost:3000/itens');
  };

  GetSubItens(){
    return fetch('http://localhost:3000/subitens');
  }

}
