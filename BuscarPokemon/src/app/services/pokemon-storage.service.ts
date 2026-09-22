import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

export interface PokemonTarjeta {
  id?: number;
  nombre?: string;
  imagen: string;
  tipo: string;
  baseExperience: number;
  esFavorito?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  private http = inject(HttpClient);
  private readonly STORAGE_KEY = 'equipo_pokemon_registrado';
  misPokemons = signal<PokemonTarjeta[]>([]);

  constructor() {
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.misPokemons.set(JSON.parse(data));
    }
  }

  private sincronizarStorage(actualizados: PokemonTarjeta[]): void {
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));
  }

  buscarEnApi(nombreId: string | number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreId}`);
  }

  guardarPokemon(nuevo: PokemonTarjeta): void {
    const actualizados = [...this.misPokemons(), nuevo];
    this.sincronizarStorage(actualizados);
  }

  actualizarPokemon(index: number, pokemon: PokemonTarjeta): void {
    const actualizados = [...this.misPokemons()];
    if (index >= 0 && index < actualizados.length) {
      actualizados[index] = pokemon;
      this.sincronizarStorage(actualizados);
    }
  }

  eliminarPokemon(index: number): void {
    const actualizados = this.misPokemons().filter((_, i) => i !== index);
    this.sincronizarStorage(actualizados);
  }
}