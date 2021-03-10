import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundWinnersComponent } from './round-winners.component';

describe('RoundWinnersComponent', () => {
  let component: RoundWinnersComponent;
  let fixture: ComponentFixture<RoundWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
