import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Djm2Component } from './djm2.component';

describe('Djm2Component', () => {
  let component: Djm2Component;
  let fixture: ComponentFixture<Djm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Djm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Djm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
