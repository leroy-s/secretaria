import { Routes } from '@angular/router';
import { GestionDeCartasComponent } from './gestion-de-cartas/gestion-de-cartas.component';
import { GestionReportesComponent } from './gestion-reportes/gestion-reportes.component';
import { RedireccionamientoComponent } from './redireccionamiento/redireccionamiento.component';
import { SidebarComponent } from './sidebar/sidebar.component'
export const routes: Routes = [
    {
        path: '',
        component: GestionDeCartasComponent,
        title: 'Componente de cartas'
    }
    ,
    {
        path: 'reportes',
        component:  GestionReportesComponent,
        title: 'Componente de escuelas y facultades'
    }
    ,
    {
        path: 'redireccionamiento',
        component:  RedireccionamientoComponent,
        title: 'Componente de redireccionamiento'
    }
    ,
    {
        path: 'sidebar',
        component: SidebarComponent,
        title: 'Sidebar'
    }
    ,
    {
        path: '**',
        redirectTo :''
    }
];
