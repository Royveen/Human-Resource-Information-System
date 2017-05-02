import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { IRouting } from '../shared/interfaces';
import {ResourceComponent} from './resource.component'
import {PersonalComponent} from './personal.form.component'
import {WorkComponent} from './work.form.component'
import {ProjectComponent} from './project.form.component'
import {SeperationComponent} from './seperation.component'
import { CanDeactivateFormGuard } from './can-deactivate.guard'

export var resourcesRoutes: Routes = [
  { path: 'resources/:id', component: ResourceComponent,children:[
   { path: 'personal', component: PersonalComponent ,canDeactivate: [ CanDeactivateFormGuard ]},
   { path: 'work', component: WorkComponent ,canDeactivate: [ CanDeactivateFormGuard ]},
   { path: 'projects', component: ProjectComponent},
   { path: 'seperation', component: SeperationComponent}
    ]
    }
  ];

export const resourcesRouting: IRouting = {
  routes: RouterModule.forChild(resourcesRoutes),
  components:[ResourceComponent,PersonalComponent,WorkComponent,ProjectComponent,SeperationComponent]
}