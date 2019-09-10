import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthViewComponent } from './length-view.component';

describe('LengthViewComponent', () => {
  let component: LengthViewComponent;
  let fixture: ComponentFixture<LengthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
