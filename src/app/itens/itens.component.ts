import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens:Object;
  constructor(private data:DataSourceService) { }

  ngOnInit() {
    this.GetItens();
  }

  async GetItens(){
    let response = await this.data.GetItens();
    let data = await response.json();
    this.itens = data;
  }

}
