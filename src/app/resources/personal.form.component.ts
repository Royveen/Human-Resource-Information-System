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
    selector:'personal-form-container',
    templateUrl:'personal.form.html',
})
export class PersonalComponent implements OnInit{
    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        editableDateField:false,
        showSelectorArrow:false,
        openSelectorTopOfInput:true,
    };
    resource={};
    resourceFilter={
        firstName:1,
        lastName:1,
        date_of_birth:1,
        address:1,
        state:1,
        country:1,
        contact:1
    }
  states: IState[];
  message: string;
  @ViewChild('personalForm') personalForm: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              public dialogService: DialogService) { 
      
      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);

    this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        this.dataService.getResource(id,this.resourceFilter)
            .subscribe((resource: IResource) =>this.resource = resource,
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.dataService.loader=false;
    });

      });
              }

  ngOnInit(){
    console.log(this.personalForm.controls);
  }

  onSubmit() {
   var changedProp=this.dataService.getChangedProperties(this.personalForm);
   this.dialogService.confirm('Are you sure?')
   .then(() => {
      this.dataService.loader=true;
       this.dataService.updateResource(this.resource["_id"],changedProp)
        .subscribe((res:string) => {
           this.dialogService.success(res);
           this.dataService.loader=false;
           this.personalForm.form.markAsPristine();      
      },
      (error:any)=>{
        this.dialogService.error("The Request encountered an error, please try again after some time");
    })
    });
     
  }

canDeactivate(): Promise<boolean> | boolean {
    if (!this.personalForm.dirty) {
      return true;
    }
    
    return this.dialogService.confirm('Discard form changes?');
  }
}