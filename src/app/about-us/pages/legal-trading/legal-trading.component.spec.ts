import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalTradingComponent } from './legal-trading.component';

describe('LegalTradingComponent', () => {
  let component: LegalTradingComponent;
  let fixture: ComponentFixture<LegalTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalTradingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
