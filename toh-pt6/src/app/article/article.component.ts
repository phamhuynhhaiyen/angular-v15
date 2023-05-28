import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  template: `<h2>Welcome to Article Home</h2>
        <p>Find article <a routerLink="list" routerLinkActive="active">list</a></p>
	<div [ngClass] = "'child-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `,
  standalone: true,
  imports: [RouterOutlet, NgClass, RouterLink]
})
export class ArticleComponent {
} 