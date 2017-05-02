import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import { dashboardRouting } from './dashboard.routing';
import {resourcesRouting} from '../resources/resources.routing'
import { CanDeactivateFormGuard } from '../resources/can-deactivate.guard';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  imports:      [ CommonModule, dashboardRouting.routes, SharedModule,MyDatePickerModule ],
  declarations: [ dashboardRouting.components ],
  providers:[CanDeactivateFormGuard]
})
export class DashboardModule { 
   
}