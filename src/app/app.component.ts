import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'canal-street-market';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const panels = this.elementRef.nativeElement.querySelectorAll('.panel');
    const homeElement = this.elementRef.nativeElement.querySelector('.home');

    panels.forEach((panel: any) => {
      this.renderer.listen(panel, 'click', () => {
        panels.forEach((p: any) => this.renderer.removeClass(p, 'active'));
        this.renderer.addClass(panel, 'active');
      });
    });

    this.renderer.addClass(homeElement, 'active');
  }
}
