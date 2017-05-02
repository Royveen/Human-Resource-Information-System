import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IRouting } from '../shared/interfaces';
import {resourcesRoutes} from '../resources/resources.routing'
import {ResourcesComponent} from '../resources/resources.component'
var routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children:[
  { path: 'resources', component: ResourcesComponent, children : resourcesRoutes }
  ]
  }
];

export const dashboardRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[DashboardComponent,ResourcesComponent]
}