import { Directive, ElementRef, Host, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[productStyle]'
})
export class ProductStyle implements OnChanges{
  @Input()shadow1:string = "0 0px 1px grey"
  @Input()shadow2:string = "0 3px 10px 3px #9E9E9E"

  constructor(public el:ElementRef) {
    this.el.nativeElement.style.borderRadius = "20px"
    this.el.nativeElement.style.boxShadow = this.shadow1
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = this.shadow2
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = this.shadow1
   }

   ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.boxShadow = this.shadow1
   }

}
