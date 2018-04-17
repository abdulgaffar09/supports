import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaureportsComponent } from './tableaureports.component';

describe('TableaureportsComponent', () => {
  let component: TableaureportsComponent;
  let fixture: ComponentFixture<TableaureportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaureportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaureportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
