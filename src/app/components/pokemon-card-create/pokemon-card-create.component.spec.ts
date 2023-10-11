import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardCreateComponent } from './pokemon-card-create.component';

describe('PokemonCardCreateComponent', () => {
  let component: PokemonCardCreateComponent;
  let fixture: ComponentFixture<PokemonCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
