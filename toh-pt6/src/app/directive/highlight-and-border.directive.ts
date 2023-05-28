import { Directive } from '@angular/core';
import { BorderDirective } from './border-directive.directive';
import { HighlightDirective } from './highlight-directive.directive';


@Directive({
  selector: '[appHighlightAndBorder]',
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['color: highlightColor'],
    },
    {
      directive: BorderDirective,
      inputs: ['color: borderColor'],
    },
  ],
  standalone: true,
})
export class HighlightAndBorderDirective {}
