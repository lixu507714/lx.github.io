import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

export const ROUTERS: Routes = [
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'test'
    }
];
