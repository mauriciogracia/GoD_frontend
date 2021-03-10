import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundWinersComponent } from './round-winers.component';

describe('RoundWinersComponent', () => {
  let component: RoundWinersComponent;
  let fixture: ComponentFixture<RoundWinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundWinersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundWinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
