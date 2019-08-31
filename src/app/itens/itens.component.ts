import { Component, OnInit, NgZone } from '@angular/core';
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
  ItenArr: any = [];
  ItensList: any = [];
  
  ngOnInit() {
    this.addIten();
    this.listItens();
  }
  
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dataSourceService: DataSourceService
  ){ }

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

  deleteIten(data){
    var index = index = this.ItensList.map(x => {return x.name}).indexOf(data.name);
     return this.dataSourceService.DeleteIten(data.id).subscribe(res => {
      this.ItensList.splice(index, 1)
       console.log('Iten deleted!')
     })
  }

  submitForm() {
    this.dataSourceService.CreateIten(this.itenForm.value).subscribe(res => {
      console.log('Iten added!')
      this.ngZone.run(() => this.router.navigateByUrl('/subitens'))
    });
  }

}
