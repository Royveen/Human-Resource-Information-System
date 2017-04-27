import { Component, Input, ViewChild , OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params , CanDeactivate} from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { DialogService } from '../core/services/dialog.service';
import { IResource, IState } from '../shared/interfaces';
import {IMyOptions} from 'mydatepicker';
declare var swal:any;

@Component({
    moduleId:module.id,
    selector:'seperation-form-container',
    templateUrl:'seperation.form.html'
})
export class SeperationComponent {

       private myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        editableDateField:false,
        showSelectorArrow:false,
        openSelectorTopOfInput:true,
    };

    resourceFilter={
        firstName:1,
        lastName:1,
        sap_id:1,
        projects:1,
        associate_status:1,
        resignation_date:1,
        last_working_date:1,
        type_of_hiring:1,
        hire_plan_status:1
    }

  resource:any={}

    constructor( private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              public dialogService: DialogService){
         this.dataService.loader=true;         
        this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        this.dataService.getResource(id,this.resourceFilter)
            .subscribe((resource: IResource) =>{this.dataService.loader=false;this.resource = resource.projects},
      (error:any)=>{
        this.dialogService.error("The Request encountered an error, please try again after some time");
         this.dataService.loader=false;
    });
        })    
}
}