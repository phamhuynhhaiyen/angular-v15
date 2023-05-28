import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Article } from './article';
import {Observable, of } from 'rxjs';
import { ARTICLES } from '../data';

// const ARTICLES = [
//   new Article(1, 'Core Java Tutorial', 'Java'),
//   new Article(2, 'Angular Tutorial', 'Angular'),  
//   new Article(3, 'Hibernate Tutorial', 'Hibernate')
// ];
let articlesObservable = of(ARTICLES);

@Injectable()
export class ArticleService { 
	getArticles(): Observable<Article[]> {
	    return articlesObservable;
	}
	// getArticle(id: number): Observable<Article> {
    //        return this.getArticles()
    //         .pipe(map(articles => articles.find(article => article.articleId === id)));
    //     }	
    //     updateArticle(article: Article): Observable<Article> {
	//    return this.getArticles()
	//     .pipe(map(articles => {
	// 	 let articleObj = articles.find(ob => ob.articleId === article.articleId);
    //              articleObj = article;
	// 	 return articleObj;
	//        }
	//      ));
    //     }	
} 