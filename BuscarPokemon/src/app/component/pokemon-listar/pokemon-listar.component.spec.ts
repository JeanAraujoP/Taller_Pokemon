import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListarComponent } from './pokemon-listar.component';

describe('PokemonListarComponent', () => {
  let component: PokemonListarComponent;
  let fixture: ComponentFixture<PokemonListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
