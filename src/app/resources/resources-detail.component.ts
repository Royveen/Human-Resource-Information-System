import { Component } from '@angular/core';
import { Router,Params,ActivatedRoute } from '@angular/router';
import { IResource } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
declare var swal:any;
@Component({ 
  moduleId: module.id,
  selector: 'resource-details',
  templateUrl: 'resource-detail.component.html'
})
export class ResourceDetailComponent  {

  resource: IResource;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 

    
     this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        this.dataService.getResource(id)
            .subscribe((resource: IResource) =>this.resource = resource,
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.dataService.loader=false;
    });
      });
  }

}