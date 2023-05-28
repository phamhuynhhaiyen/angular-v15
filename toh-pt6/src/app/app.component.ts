import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `,
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [RouterOutlet, RouterLink, NgClass]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
