import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import { resourcesRouting } from './resources.routing';
@NgModule({
  imports:      [ CommonModule, resourcesRouting.routes,SharedModule],
  declarations: [ resourcesRouting.components ]
})
export class ResourcesModule { 
   
}