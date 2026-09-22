import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detalles.html',
  styleUrl: './pokemon-detalles.component.css',
})
export class PokemonDetallesComponent implements OnInit {
  ngOnInit(): void {}
}