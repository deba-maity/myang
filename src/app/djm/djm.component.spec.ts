import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjmComponent } from './djm.component';

describe('DjmComponent', () => {
  let component: DjmComponent;
  let fixture: ComponentFixture<DjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
