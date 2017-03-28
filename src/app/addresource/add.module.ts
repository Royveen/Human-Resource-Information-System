import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { addRouting } from './add.routing';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports:      [ CommonModule, addRouting.routes, SharedModule,MyDatePickerModule],
  declarations: [ addRouting.components]
})
export class AddModule {    
}