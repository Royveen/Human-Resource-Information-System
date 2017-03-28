import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add.component';
import { IRouting } from '../shared/interfaces';
export var Addroutes: Routes = [
  { path: 'new', component: AddComponent}
];

export const addRouting: IRouting = {
  routes: RouterModule.forChild(Addroutes),
  components:[AddComponent]
}