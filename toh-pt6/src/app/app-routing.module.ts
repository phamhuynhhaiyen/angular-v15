
import { inject } from '@angular/core';
import {  Router, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AuthService } from './authentication/services/auth.service';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';


const	checkCanActivate = ()=> {
  const authService = inject(AuthService)
  const router = inject(Router)
  let url = router.routerState.snapshot.url;
  console.log('Url:' + url);
  if (authService.isUserLoggedIn()) {
    return true;
  }
  authService.setRedirectUrl(url);
  router.navigate([authService.getLoginUrl()]);
  return false;
}

export const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/article',
		pathMatch: 'full'
	},
	{
		path: '',
		component: DashboardLayoutComponent,
		canActivate: [checkCanActivate],
		children: [
			{
				path: 'article',
				loadChildren: ()=> import('./article/article-routing.module').then(m => m.articleRoutes)
			},
			{
				path: 'address',
				component: AddressComponent
			}
		]
	},
	{
		path: 'login',
		loadChildren: () => import('./authentication/auth-routing.module').then(m => m.authRoutes)
	}
 
];

