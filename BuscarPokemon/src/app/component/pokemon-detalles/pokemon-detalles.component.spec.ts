import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetallesComponent } from './pokemon-detalles.component';

describe('PokemonDetallesComponent', () => {
  let component: PokemonDetallesComponent;
  let fixture: ComponentFixture<PokemonDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
