import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PokemonStorageService } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-listar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="padding: 20px;">
      <h2>Listado de Pokémon</h2>
      <ul>
        @for (pk of storageService.misPokemons(); track pk.imagen) {
          <li>{{ pk.tipo }} - Exp: {{ pk.baseExperience }}</li>
        }
      </ul>
    </div>
  `
})
export class PokemonListarComponent {
  storageService = inject(PokemonStorageService);
}