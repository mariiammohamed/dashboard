import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakTimesComponent } from './peak-times.component';

describe('PeakTimesComponent', () => {
  let component: PeakTimesComponent;
  let fixture: ComponentFixture<PeakTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeakTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeakTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
