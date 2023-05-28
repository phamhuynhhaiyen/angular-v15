import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './login.component';
 
export const authRoutes: Routes = [
	{ 
	  path: '',
	  component: LoginComponent
	}
];
