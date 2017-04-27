import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import {resourcesRouting} from '../resources/resources.routing'
import { CanDeactivateFormGuard } from '../resources/can-deactivate.guard';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  imports:      [ CommonModule, resourcesRouting.routes, SharedModule,MyDatePickerModule ],
  declarations: [ resourcesRouting.components ],
  providers:[CanDeactivateFormGuard]
})
export class ResourcesModule { 
   
}