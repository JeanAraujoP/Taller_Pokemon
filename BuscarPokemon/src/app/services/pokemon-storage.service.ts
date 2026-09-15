import { HttpClient } from '@angular/common/http'
import { inject, Inject, Injectable } from '@angular/core';

export interface PokemonTarjeta {
  imagen: string;
  tipo: string;
  baseExperience: string;
  esFavorito?: boolean;
}

@Service()

@Injectable

export class PokemonStorage {
  private http = inject(HttpClient)
  private readonly STORAGE_KEY - 'equipo_pokemon_registrado'
  misPokemons = signal<pokemon[]>
}

export class PokemonStorage {
  constructor(){
    this.cargarDesdeStorage() {
      const data = localStorage.getItem(this.STORAGE_KEY);
    }
  }
}
