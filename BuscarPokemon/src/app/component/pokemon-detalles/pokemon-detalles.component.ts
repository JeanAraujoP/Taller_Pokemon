import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonStorageService } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-detalles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-detalles.html',
  styleUrl: './pokemon-detalles.component.css',
})
export class PokemonDetallesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokeService = inject(PokemonStorageService);

  pokemonData: any = null;
  cargando: boolean = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];

    this.pokeService.buscarEnApi(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar el Pokémon', err);
        this.cargando = false;
      }
    });
  }
}