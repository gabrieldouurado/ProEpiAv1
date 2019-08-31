import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItensComponent } from './edit-itens.component';

describe('EditItensComponent', () => {
  let component: EditItensComponent;
  let fixture: ComponentFixture<EditItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
