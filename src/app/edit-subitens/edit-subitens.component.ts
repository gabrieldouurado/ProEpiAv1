import { Component, OnInit, NgZone } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-subitens',
  templateUrl: './edit-subitens.component.html',
  styleUrls: ['./edit-subitens.component.css']
})
export class EditSubitensComponent implements OnInit {
  SubItensList: any = [];
  updateSubItenForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,    
    public dataSourceService: DataSourceService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.dataSourceService.GetSubIten(id).subscribe((data) => {
      this.updateSubItenForm = this.fb.group({
        name: [data.name]
      })
    })
  }

  ngOnInit() {
    this.updateForm();
  }

  updateForm(){
    this.updateSubItenForm = this.fb.group({
      name: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.dataSourceService.UpdateSubIten(id, this.updateSubItenForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/subitens'))
    })
  }

}
