import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { DataService } from '../core/services/data.service';
import { navbarRouting } from './navbar.routing';

@NgModule({
  imports:      [ CommonModule, navbarRouting.routes, SharedModule],
  declarations: [ navbarRouting.components ]
})
export class NavbarModule { 
   
}