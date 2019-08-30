import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitensComponent } from './subitens.component';

describe('SubitensComponent', () => {
  let component: SubitensComponent;
  let fixture: ComponentFixture<SubitensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubitensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
