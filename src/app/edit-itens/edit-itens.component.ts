import { Component, OnInit, NgZone } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-itens',
  templateUrl: './edit-itens.component.html',
  styleUrls: ['./edit-itens.component.css']
})
export class EditItensComponent implements OnInit {
  ItensList: any = [];
  updateItenForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,    
    public dataSourceService: DataSourceService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.dataSourceService.GetIten(id).subscribe((data) => {
      this.updateItenForm = this.fb.group({
        name: [data.name]
      })
    })
  }

  ngOnInit() {
    this.updateForm();
  }

  updateForm(){
    this.updateItenForm = this.fb.group({
      name: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.dataSourceService.UpdateIten(id, this.updateItenForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/itens'))
    })
  }
}
