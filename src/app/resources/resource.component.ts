import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  moduleId: module.id,
  selector: 'resource-info',
  templateUrl: 'resource.component.html'
})
export class ResourceComponent implements OnInit {
  
    constructor(private router: Router) { }

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
