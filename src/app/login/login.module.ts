import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import {ILogin} from '../shared/interfaces';
import { loginRouting } from './login.routing';

@NgModule({
  imports:      [ CommonModule, loginRouting.routes, SharedModule ],
  declarations: [ loginRouting.components ]
})
export class LoginModule { 
   
}