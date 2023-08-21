import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedSmsComponent } from './templated-sms.component';

describe('TemplatedSmsComponent', () => {
  let component: TemplatedSmsComponent;
  let fixture: ComponentFixture<TemplatedSmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatedSmsComponent]
    });
    fixture = TestBed.createComponent(TemplatedSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
