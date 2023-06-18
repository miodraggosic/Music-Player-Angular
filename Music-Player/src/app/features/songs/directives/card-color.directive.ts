import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardColor]',
})
export class CardColorDirective implements OnInit {
  @Input() duration?: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.addBackground();
  }

  private addBackground() {
    const songDuration = this.durationSeconds();

    if (songDuration < 120) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
      return;
    } else if (songDuration > 240) {
      this.elementRef.nativeElement.style.backgroundColor = 'white';
      this.elementRef.nativeElement.style.color = 'black';
      return;
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
    }
  }

  private durationSeconds() {
    const minToSec = Number(this.duration?.split(':')[0]) * 60;
    const sec = Number(this.duration?.split(':')[1]);

    return minToSec + sec;
  }
}
