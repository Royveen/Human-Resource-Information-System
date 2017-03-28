import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http';
import {IMyOptions} from 'mydatepicker';
// import 'rxjs/add/operator/pairwise';
// import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { IResource, IState,IProject } from '../shared/interfaces';
declare var swal:any;

@Component({ 
  moduleId: module.id,
  selector: 'add-container', 
  templateUrl: 'add.component.html'
})

export class AddComponent {
  private myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy'
    };


    resDet:IResource={
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
    record_status:'Active',
    user_access:''
  };

  projectDet:IProject={
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
    }
  constructor(public service:DataService){
      
  }

  insertProject(){
  this.resDet.projects.push(this.projectDet);
  }

  removeProject(id:number){
    this.resDet.projects.splice(id,1);
  }

  onSubmit(){
   
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(() => {
      this.service.loader=true;
      this.service.addResource(this.resDet).subscribe(
      (res:any)=>{
        swal('success',"Saved Successfully","success");
         this.service.loader=false;
      },
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.service.loader=false;
    })
    })

  }




}