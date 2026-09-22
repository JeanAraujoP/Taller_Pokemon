import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

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

  actualizarFavorito(id: number): void {
    const actualizados = this.misPokemons().map(poke => {
      if (poke.id === id) {
        return { ...poke, esFavorito: !poke.esFavorito };
      }
      return poke;
    });
    this.sincronizarStorage(actualizados);
  }

  liberarPokemon(id: number): void {
    const filtrado = this.misPokemons().filter(poke => poke.id !== id);
    this.sincronizarStorage(filtrado);
  }

  consultarPokemon(name: string): Observable<any> {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get<any>(`${apiUrl}/${name.toLowerCase()}`);
  }
}