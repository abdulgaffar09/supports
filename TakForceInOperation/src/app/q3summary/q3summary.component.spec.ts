import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3summaryComponent } from './q3summary.component';

describe('Q3summaryComponent', () => {
  let component: Q3summaryComponent;
  let fixture: ComponentFixture<Q3summaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q3summaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3summaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
