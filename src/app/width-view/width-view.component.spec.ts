import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthViewComponent } from './width-view.component';

describe('WidthViewComponent', () => {
  let component: WidthViewComponent;
  let fixture: ComponentFixture<WidthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
