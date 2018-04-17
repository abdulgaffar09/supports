import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4summaryComponent } from './q4summary.component';

describe('Q4summaryComponent', () => {
  let component: Q4summaryComponent;
  let fixture: ComponentFixture<Q4summaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q4summaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4summaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
