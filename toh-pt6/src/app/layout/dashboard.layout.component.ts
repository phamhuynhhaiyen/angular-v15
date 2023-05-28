import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogoutComponent } from '../authentication/logout.component';
@Component({
	template: `
  <logout></logout>
	<nav [ngClass] = "'parent-menu'">
		<a routerLink="/article" routerLinkActive="active" >Article</a>
		<a routerLink="/address" routerLinkActive="active">Address</a>
	</nav>  
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `,
  standalone: true,
  imports:[NgClass, RouterOutlet, RouterLink, LogoutComponent]
})
export class DashboardLayoutComponent {
} 