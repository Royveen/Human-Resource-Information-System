import {Component } from '@angular/core';
import {Location} from '@angular/common';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http'
import 'rxjs/add/operator/pairwise';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { IResource } from '../shared/interfaces';
import { propertyResolver } from '../shared/property-resolver';
declare var swal:any;
@Component({ 
  moduleId: module.id,
  selector: 'resource-container', 
  templateUrl: 'resources.component.html'
})
export class ResourcesComponent{
title: string;
searchRes:string='$';
  filterText: string;
  resources: IResource[] = [];
  filteredCustomers: IResource[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Resources Dashboard';
    this.filterText = 'Filter Resources:';
    this.displayMode = DisplayModeEnum.Card;
    this.dataService.getResources()
        .subscribe((resources: IResource[]) => {
          this.resources = this.filteredCustomers = resources;
          this.dataService.loader=false;
        },
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.dataService.loader=false;
    });

  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }


  filterChanged(data: string) {
    if (data && this.resources) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'state.name'];
        let filtered = this.resources.filter(item => {
            let match = false;
            for (let prop of props) {
                if (prop.indexOf('.') > -1) {
                   var value = propertyResolver.resolve(prop, item);
                   if (value && value.toUpperCase().indexOf(data) > -1) {
                      match = true;
                      break;
                   }
                   continue;
                }
                
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredCustomers = filtered;
    }
    else {
      this.filteredCustomers = this.resources;
    }
  }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
    
