import {Component} from '@angular/core';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http'
import { AuthService } from '../core/services/auth.service';

@Component({ 
  moduleId: module.id,
  selector: 'nav-container', 
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
  constructor(private auth : AuthService){
   
  }
}