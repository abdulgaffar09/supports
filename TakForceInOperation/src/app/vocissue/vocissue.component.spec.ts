import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocissueComponent } from './vocissue.component';

describe('VocissueComponent', () => {
  let component: VocissueComponent;
  let fixture: ComponentFixture<VocissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
