import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintbalComponent } from './printbal.component';

describe('PrintbalComponent', () => {
  let component: PrintbalComponent;
  let fixture: ComponentFixture<PrintbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
