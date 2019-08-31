import { Component, OnInit, NgZone } from '@angular/core';
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
  
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public dataSourceService: DataSourceService
  ){ }

  ngOnInit() {
    this.addSubIten();
    this.listSubItens();
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

  submitForm() {
    this.dataSourceService.CreateSubIten(this.subItenForm.value).subscribe(res => {
      console.log('Subiten added!')
      this.ngZone.run(() => this.router.navigateByUrl('/subitens'))
    });
  }
}