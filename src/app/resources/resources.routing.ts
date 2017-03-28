import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { IRouting } from '../shared/interfaces';
import {ResourceComponent} from './resource.component'
import {ResourceDetailComponent} from './resources-detail.component'
import {ResourceEditComponent} from './resource-edit.component'
export var resourcesRoutes: Routes = [
  { path: 'resources', component: ResourcesComponent},
  { path: 'resources/:id', component: ResourceComponent,children:[
   { path: 'details', component: ResourceDetailComponent},
   { path: 'edit', component: ResourceEditComponent}
  ]
  }
];

export const resourcesRouting: IRouting = {
  routes: RouterModule.forChild(resourcesRoutes),
  components:[ResourcesComponent,ResourceComponent,ResourceDetailComponent,ResourceEditComponent]
}