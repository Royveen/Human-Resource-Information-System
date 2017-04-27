import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { DialogService } from '../core/services/dialog.service';
import { IResource, IState } from '../shared/interfaces';
import {Response} from '@angular/http';
import {IMyOptions} from 'mydatepicker';
declare var _:any;
@Component({
    moduleId:module.id,
    selector:'project-container',
    templateUrl:'project.form.html'
})
export class ProjectComponent {

        private myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        editableDateField:false,
        showSelectorArrow:false,
        openSelectorTopOfInput:true
    };

    resourceFilter={
        firstName:1,
        lastName:1,
        sap_id:1,
        projects:1
    }

  projectList:any =[];

    constructor( private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              public dialogService: DialogService){
         this.dataService.loader=true;         
        this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        this.dataService.getResource(id,this.resourceFilter)
            .subscribe((resource: IResource) =>{this.dataService.loader=false;this.projectList = resource.projects},
      (error:any)=>{
        this.dialogService.error("The Request encountered an error, please try again after some time");
         this.dataService.loader=false;
    });
        })    
}

projectDet:any={
      client_id:'',
      assignment_start_date:'',
      assignment_end_date:'',
      project_group:'',
      project_id:'',
      project_name:'',
      status_in_project:'',
      team_group:'',
      team_name:'',
      allocation:'0',
      manager_1_id:'',
      manager_2_id:'',
      manager_1_name:'',
      manager_2_name:'',
      project_country:'',
      project_location:''
    };

    x:number=0;

editProject(id:number){
    this.x=id;
    let projectEdit=this.projectList[id];
this.projectDet=_.mapObject(this.projectDet,(val:any, key:any) => {
  return projectEdit[key];
});
}
        };