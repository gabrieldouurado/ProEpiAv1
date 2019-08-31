import { Component, OnInit, NgZone, Input } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subitens',
  templateUrl: './subitens.component.html',
  styleUrls: ['./subitens.component.css']
})
export class SubitensComponent implements OnInit {
  subItenForm: FormGroup;
  subItenArr: any = [];
  SubItensList: any = [];
  ItensSubitensList: any = [];
  ItensList: any = [];
  ItensListFiltred: any = [];
  
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dataSourceService: DataSourceService
  ){ }

  @Input() SubitenID: string; 

  ngOnInit() {
    this.addSubIten();
    this.listSubItens();
    this.listItensSubitens();
    this.listItens();
  }

  addSubIten() {
    this.subItenForm = this.fb.group({
      name: ['']
    })
  }

  listSubItens() {
    return this.dataSourceService.GetSubItens().subscribe((data: {}) => {
      this.SubItensList = data;
      console.log(this.SubItensList);
    })
    
  }

  deleteSubIten(data){
    var index = index = this.SubItensList.map(x => {return x.name}).indexOf(data.name);
     return this.dataSourceService.DeleteSubIten(data.id).subscribe(res => {
      this.SubItensList.splice(index, 1)
       console.log('Subiten deleted!')
     })
  }

  submitFormSubitens() {
    this.dataSourceService.CreateSubIten(this.subItenForm.value).subscribe(res => {
      console.log('Subiten added!')
      this.ngZone.run(() => this.router.navigateByUrl('/subitens'))
    });
  }

  /////////RELACOES///////////////
  listItensSubitens() {
    return this.dataSourceService.GetItenSubIten().subscribe((data: {}) => {
      this.ItensSubitensList = data;
      console.log(this.ItensSubitensList);
    })    
  }

  listItens() {
    return this.dataSourceService.GetItens().subscribe((data: {}) => {
      this.ItensList = data;
      console.log(this.ItensList);
    })
  }
  

  submitFormItensSubitens(){
    console.log(this.SubitenID)
      this.ItensSubitensList.map(ItensSubitens => {
          if (ItensSubitens.sub_item_id == this.SubitenID) {
            this.ItensList.map(Itens => {
              if(Itens.id == ItensSubitens.item_id){
                this.ItensListFiltred.push(Itens.name)
                console.log(this.ItensListFiltred)
              }
            })
          }
      })
  }
}