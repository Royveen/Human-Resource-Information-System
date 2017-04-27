import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
import {WorkComponent} from './work.form.component'

@Injectable()
export class CanDeactivateFormGuard  implements CanDeactivate<any> {

    canDeactivate(component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

    console.log(`ResourceId: ${route.parent.params['id']} URL: ${state.url}`);

    //Check with component to see if we're able to deactivate
    return component.canDeactivate();
  }

    

}