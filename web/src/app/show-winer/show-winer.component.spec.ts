import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWinerComponent } from './show-winer.component';

describe('ShowWinerComponent', () => {
  let component: ShowWinerComponent;
  let fixture: ComponentFixture<ShowWinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
