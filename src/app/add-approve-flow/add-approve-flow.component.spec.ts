import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApproveFlowComponent } from './add-approve-flow.component';

describe('AddApproveFlowComponent', () => {
  let component: AddApproveFlowComponent;
  let fixture: ComponentFixture<AddApproveFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApproveFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApproveFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
