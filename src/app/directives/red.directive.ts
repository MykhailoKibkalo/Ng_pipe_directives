import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {element} from 'protractor';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // стилізація через ElementRef
    // console.log(element.nativeElement);
    // element.nativeElement.style.background = 'red';

    // стилізація через Renderer2
    // renderer.setStyle(element.nativeElement, 'background', 'red');
    // renderer.addClass(element.nativeElement, 'nameOfClass');
    // renderer.setAttribute(element.nativeElement, 'id', 'nameOfAttrib');

  }

  @HostListener('mouseover')
  changeColorB(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'blue');
  }
  @HostListener('mouseleave')
  changeColorW(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'white');
  }

}
