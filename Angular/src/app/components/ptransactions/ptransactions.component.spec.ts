import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtransactionsComponent } from './ptransactions.component';

describe('PtransactionsComponent', () => {
  let component: PtransactionsComponent;
  let fixture: ComponentFixture<PtransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
