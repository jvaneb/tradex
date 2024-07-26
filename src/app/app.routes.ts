import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        data: { breadcrumb: 'Home' },
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home.component').then( m => m.HomeComponent),
                
            },
            {
                path: 'markets',
                loadComponent: () => import('./markets/markets.component').then( m => m.MarketsComponent),
                data: { breadcrumb: 'Markets' }
            }
        ]
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withComponentInputBinding())
    ]
};
