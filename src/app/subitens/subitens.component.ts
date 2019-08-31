import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subitens',
  templateUrl: './subitens.component.html',
  styleUrls: ['./subitens.component.css']
})
export class SubitensComponent implements OnInit {

  //subitens:Object;
  constructor(private data:DataSourceService) { }

  ngOnInit() {
    //this.GetSubItens();
  }
/*
  async GetSubItens(){
    let response = await this.data.GetSubItens();
    let data = await response.json();
    this.subitens = data;
  }*/
}