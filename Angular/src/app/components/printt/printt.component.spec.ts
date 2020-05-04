import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinttComponent } from './printt.component';

describe('PrinttComponent', () => {
  let component: PrinttComponent;
  let fixture: ComponentFixture<PrinttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
