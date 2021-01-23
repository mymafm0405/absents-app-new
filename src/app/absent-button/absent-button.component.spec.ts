import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentButtonComponent } from './absent-button.component';

describe('AbsentButtonComponent', () => {
  let component: AbsentButtonComponent;
  let fixture: ComponentFixture<AbsentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
