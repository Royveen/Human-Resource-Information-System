import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { IRouting } from '../shared/interfaces';
import {resourcesRoutes} from '../resources/resources.routing'
var routes: Routes = [
  { path: 'search/:id', component: SearchComponent, children : resourcesRoutes }
];

export const searchRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[SearchComponent]
}