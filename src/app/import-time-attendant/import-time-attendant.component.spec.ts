import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTimeAttendantComponent } from './import-time-attendant.component';

describe('ImportTimeAttendantComponent', () => {
  let component: ImportTimeAttendantComponent;
  let fixture: ComponentFixture<ImportTimeAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTimeAttendantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTimeAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
