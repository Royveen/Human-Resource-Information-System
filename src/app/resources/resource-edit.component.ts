import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { DialogService } from '../core/services/dialog.service';
import { IResource, IState } from '../shared/interfaces';
declare var swal:any;
@Component({
  moduleId: module.id,
  selector: 'resource-edit',
  templateUrl: 'resource-edit.component.html'
})
export class ResourceEditComponent {

  resource:IResource={
    sap_id: null,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    country:'',
    location: '',
    state: '',
    city:'',
    email: '',
    date_of_birth: '',
    date_of_joining: '',
    contact: '',
    role:'',
    Designation:'',
    status:'',
    seat_no:'',
    transport_avail:'',
    vnet:'',
    projects:[],
    total_alloc:'',
    record_status:'',
    user_access:''
  };
  states: IState[];
  message: string;
  @ViewChild('resourceForm') resourceForm: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              public dialogService: DialogService) { 
      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);

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

  private getChangedProperties(): string[] {
  let changedProperties:any = {};

  Object.keys(this.resourceForm.controls).forEach((name) => {
    let currentControl = this.resourceForm.controls[name];
    let controlValue = this.resourceForm.controls[name]["_value"];
    if (currentControl.dirty)
      changedProperties[name]=controlValue;
  });

  return changedProperties;
}
  onSubmit() {
   var changedProp=this.getChangedProperties();
      this.dataService.updateResource(this.resource["_id"],changedProp)
        .subscribe((res:string) => {
            //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            

            this.resourceForm.form.markAsPristine();
             this.message = res;
         setTimeout(function(){
           this.message = null;
         },1000);         
      });
  }
  
  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['dashboard','resources']);

    //Route guard will take care of dialog service so this isn't needed now
    // this.dialogService.confirm('Lose unsaved changes?').then((leave: boolean) => {
    //   if (leave) {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.resourceForm.dirty) {
      return true;
    }
    return this.dialogService.confirm('Discard form changes?');
  }

}