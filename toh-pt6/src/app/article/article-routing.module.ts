import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article.list.component';

export const articleRoutes: Routes = [
	{
		path: '',
		component: ArticleComponent,
		children: [
			{
				path: 'list',
				component: ArticleListComponent,
				// canActivateChild: [AuthGuardService],
				// children: [
				// 	{
				// 		path: ':id',
				// 		component: ArticleEditComponent
				// 	}
				// ]
			}
		]
	}
];
