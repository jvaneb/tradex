import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayingProtectedComponent } from './staying-protected.component';

describe('StayingProtectedComponent', () => {
  let component: StayingProtectedComponent;
  let fixture: ComponentFixture<StayingProtectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayingProtectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayingProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
