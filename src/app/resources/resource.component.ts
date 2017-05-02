import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import {DataService} from '../core/services/data.service'
import 'rxjs/add/operator/filter';
@Component({ 
  moduleId: module.id,
  selector: 'resource-info',
  templateUrl: 'resource.component.html'
})
export class ResourceComponent implements OnInit {
    previousUrl='';
    constructor(private router: Router, private service:DataService) {
        this.previousUrl=service.prevUrl;
     }

    ngOnInit() {

      //No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = CustomerDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = CustomerDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = CustomerDisplayModeEnum.Edit;
      //     break;
      // }
    }

}

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
