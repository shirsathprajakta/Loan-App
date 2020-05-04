import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyloancComponent } from './applyloanc.component';

describe('ApplyloancComponent', () => {
  let component: ApplyloancComponent;
  let fixture: ComponentFixture<ApplyloancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyloancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyloancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
