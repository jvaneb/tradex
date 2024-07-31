import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDisclosureComponent } from './cookie-disclosure.component';

describe('CookieDisclosureComponent', () => {
  let component: CookieDisclosureComponent;
  let fixture: ComponentFixture<CookieDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieDisclosureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookieDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
