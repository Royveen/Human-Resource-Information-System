import { RouterModule, Routes ,Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import 'rxjs/add/operator/pairwise';
import {LoginComponent} from './login/login.component'
var app_routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'}
];


export const app_routing = RouterModule.forRoot(app_routes,{ useHash: true});
// ,{ useHash: true,enableTracing:true });
