import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login.module';
import { LoginComponent } from './login.component';
import { IRouting } from '../shared/interfaces';
var routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent}
];

export const loginRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components:[LoginComponent]
}