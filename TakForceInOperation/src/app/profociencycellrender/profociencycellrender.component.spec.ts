import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfociencycellrenderComponent } from './profociencycellrender.component';

describe('ProfociencycellrenderComponent', () => {
  let component: ProfociencycellrenderComponent;
  let fixture: ComponentFixture<ProfociencycellrenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfociencycellrenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfociencycellrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
