import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
export class ResaltarPokemonDirective {

  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00');

  @HostListener('mouseenter') onMouseEnter() {
    this.aplicarEfecto(`3px solid ${this.colorBorde()}`, `scale(1.03)`, `0 8px 16px rgba(0,0,0,0.15)` );
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Restaura los valores por defecto al salir (ajusta según tu diseño base)
    this.aplicarEfecto('', 'scale(1)', 'none');
  }

  private aplicarEfecto(
    borde: string,
    escala: string,
    sombra: string
  ) {
    const elemento = this.el.nativeElement;
    elemento.style.border = borde;
    elemento.style.transform = escala;
    elemento.style.boxShadow = sombra;
    elemento.style.transition = 'all 0.25s ease-in-out';
  }
}