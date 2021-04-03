import { RouterModule, Routes } from '@angular/router';


// Importo rutas
// import { PagesComponent } from './pages/pages.component';

// Importo Componentes
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    { path: '' , component: PagesComponent,
    children: [
        { path: 'dashboard' , component: DashboardComponent },
        { path: 'progress' , component: ProgressComponent },
        { path: '' , redirectTo: '/dashboard', pathMatch: 'full' }
    ] },


{ path: 'login' , component: LoginComponent },
{ path: '**' , component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
