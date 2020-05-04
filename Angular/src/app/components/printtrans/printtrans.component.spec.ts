import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinttransComponent } from './printtrans.component';

describe('PrinttransComponent', () => {
  let component: PrinttransComponent;
  let fixture: ComponentFixture<PrinttransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinttransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinttransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
