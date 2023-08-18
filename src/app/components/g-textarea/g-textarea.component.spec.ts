import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GTextareaComponent } from './g-textarea.component';

describe('GTextareaComponent', () => {
  let component: GTextareaComponent;
  let fixture: ComponentFixture<GTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GTextareaComponent]
    });
    fixture = TestBed.createComponent(GTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
