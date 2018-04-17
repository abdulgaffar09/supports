import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpengineerComponent } from './pfpengineer.component';

describe('PfpengineerComponent', () => {
  let component: PfpengineerComponent;
  let fixture: ComponentFixture<PfpengineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfpengineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfpengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
