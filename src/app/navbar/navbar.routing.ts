import { Routes, RouterModule } from '@angular/router';
import { NavbarModule } from './navbar.module';
import { NavbarComponent } from './navbar.component';
import { IRouting } from '../shared/interfaces';
import {resourcesRoutes} from '../resources/resources.routing'
import {Addroutes} from '../addresource/add.routing'


Array.prototype.push.apply(resourcesRoutes,Addroutes);

var routes: Routes = [
  {
        path: 'main',
        component: NavbarComponent,
        children:resourcesRoutes
  }
]

export const navbarRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[NavbarComponent]
}