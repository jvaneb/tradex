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
            },
            {
                path: 'about-us',
                loadComponent: () => import('./about-us/about-us.component').then( m => m.AboutUsComponent),
                data: { breadcrumb: 'About us' },
                children: [
                    {
                        path: 'legal-trading',
                        loadComponent: () => import('./about-us/pages/legal-trading/legal-trading.component').then( m => m.LegalTradingComponent),
                        data: { breadcrumb: 'Legal Trading Regulations'}
                    },
                    {
                        path: 'cookie-disclosure',
                        loadComponent: () => import('./about-us/pages/cookie-disclosure/cookie-disclosure.component').then( m => m.CookieDisclosureComponent),
                        data: { breadcrumb: 'Cookie Disclosure'}
                    },
                ]
            }
        ]
    }
];

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes, withComponentInputBinding())
    ]
};
