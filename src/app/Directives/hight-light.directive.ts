import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef, private render: Renderer2) { 
    render.setStyle(el.nativeElement,'color','white')
    render.setStyle(el.nativeElement,'background','brown')
  }

}
