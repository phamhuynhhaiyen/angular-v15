import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterStateSnapshot } from '@angular/router';
import { APP_ROUTES } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ArticleService } from './app/article/services/article.service';
import { AuthService } from './app/authentication/services/auth.service';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES), provideHttpClient(), AuthService, ArticleService],
  
})

