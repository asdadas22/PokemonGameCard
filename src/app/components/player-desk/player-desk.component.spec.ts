import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDeskComponent } from './player-desk.component';

describe('PlayerDeskComponent', () => {
  let component: PlayerDeskComponent;
  let fixture: ComponentFixture<PlayerDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
