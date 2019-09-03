import { Component, OnInit, NgZone, Input } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {
  itenForm: FormGroup;
  itenSubitenForm: FormGroup;
  ItenArr: any = [];
  ItensList: any = [];
  SubItensList: any = [];
  ItensSubitensList: any = [];
  SubitensListFiltred: any = [];


  ngOnInit() {
    this.addIten();
    this.listItens();
    this.listItensSubitens();
    this.listSubItens();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dataSourceService: DataSourceService
  ) { }

  @Input() ItenID: string;

  addIten() {
    this.itenForm = this.fb.group({
      name: ['']
    })
  }

  listItens() {
    return this.dataSourceService.GetItens().subscribe((data: {}) => {
      this.ItensList = data;
      console.log(this.ItensList);
    })

  }

  deleteIten(data) {
    var index = index = this.ItensList.map(x => { return x.name }).indexOf(data.name);
    return this.dataSourceService.DeleteIten(data.id).subscribe(res => {
      this.ItensList.splice(index, 1)
      console.log(data)
    })
  }

  submitFormItens() {
    this.dataSourceService.CreateIten(this.itenForm.value).subscribe(res => {
      console.log('Iten added!')
      this.ngZone.run(() => this.router.navigateByUrl('/itens'))
    });
  }

  /////////RELACOES///////////////
  listItensSubitens() {
    return this.dataSourceService.GetItenSubIten().subscribe((data: {}) => {
      this.ItensSubitensList = data;
      console.log(this.ItensSubitensList);
    })
  }

  listSubItens() {
    return this.dataSourceService.GetSubItens().subscribe((data: {}) => {
      this.SubItensList = data;
      console.log(this.SubItensList);
    })

  }

  submitFormItensSubitens() {
    this.ItensSubitensList.map(ItensSubitens => {
      if (ItensSubitens.item_id == this.ItenID) {
        this.SubItensList.map(Subitens => {
          if (Subitens.id == ItensSubitens.sub_item_id) {
            this.SubitensListFiltred.push(Subitens.name)
            console.log(this.SubitensListFiltred)
          }
        })
      }
    })
  }

  /////////////DELETE SUBITEN FOR ITEN///////////
  deleteSubitenForIten(subitenName) {
    this.SubItensList.map(subitens => {
      if (subitens.name == subitenName) {
        this.ItensSubitensList.map(itensSubitens => {
          if (subitens.id == itensSubitens.sub_item_id && this.ItenID == itensSubitens.item_id) {
            var index = index = this.SubitensListFiltred.map(x => { return x.name }).indexOf(subitenName);
            return this.dataSourceService.DeleteSubitenForIten(itensSubitens.id).subscribe(res => {
              this.SubitensListFiltred.splice(index, 1)
              console.log('Iten deleted!')
            })
          }
        })
      }
    })
  }
}
