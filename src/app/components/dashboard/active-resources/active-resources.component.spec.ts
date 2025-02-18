import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveResourcesComponent } from './active-resources.component';

describe('ActiveResourcesComponent', () => {
  let component: ActiveResourcesComponent;
  let fixture: ComponentFixture<ActiveResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
