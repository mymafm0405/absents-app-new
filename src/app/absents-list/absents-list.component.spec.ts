import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentsListComponent } from './absents-list.component';

describe('AbsentsListComponent', () => {
  let component: AbsentsListComponent;
  let fixture: ComponentFixture<AbsentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
