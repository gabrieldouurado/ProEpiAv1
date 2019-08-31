import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubitensComponent } from './edit-subitens.component';

describe('EditSubitensComponent', () => {
  let component: EditSubitensComponent;
  let fixture: ComponentFixture<EditSubitensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubitensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
