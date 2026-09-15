import { Directive, ElementRef, HostListener } from '@angular/core';
import { scanInternals } from 'rxjs/internal/operators/scanInternals';

@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
export class ResaltarPokemonDirective {

  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00')

  @HostListener('mouseenter') onMouseEnter() {
    this.aplicarEfecto(`3xp solid ${this.colorBorde()}`,'scale(1.03)','0 8xp 16xp rgba(0,0,0,0.15)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.aplicarEfecto(`1xp solid  ${this.colorBorde()}`,'scale(1.03)','0 8xp 16xp rgba(0,0,0,0.15)');
  }

  aplicarEfecto(borde: string, escala: string, sombra: string){
    const elemento = this.el.nativeElement
    elemento.style.border = borde;
    elemento.style.transform = escala;
    elemento.style.bocshadow = sombra;
    elemento.style.transition = 'all 0.25s ease-in-out';

  }
}
