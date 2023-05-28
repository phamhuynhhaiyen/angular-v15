import { Component } from '@angular/core';
import { BorderDirective } from '../directive/border-directive.directive';
import { HighlightAndBorderDirective } from '../directive/highlight-and-border.directive';
import { HighlightDirective } from '../directive/highlight-directive.directive';
@Component({
  template: `
  <h3>Example of Directive composition API</h3>
  <p appHighlight>Paragraph with a highlight directive</p>
  <p appBorder>Paragraph with a border directive</p>
  <p appHighlightAndBorder>Paragraph with a highlight and border directive</p>
  `,
  standalone: true,
  imports:[HighlightAndBorderDirective, HighlightDirective, BorderDirective]
})
export class AddressComponent {}
