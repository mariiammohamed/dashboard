import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingOverviewComponent } from './watching-overview.component';

describe('WatchingOverviewComponent', () => {
  let component: WatchingOverviewComponent;
  let fixture: ComponentFixture<WatchingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchingOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
