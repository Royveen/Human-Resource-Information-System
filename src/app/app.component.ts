import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {Title} from '@angular/platform-browser';
import { AuthService } from './core/services/auth.service';
import { DataService } from './core/services/data.service';
import { RouterModule, Routes , NavigationStart,NavigationEnd,NavigationError } from '@angular/router';
@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(public titleService:Title, public loadingService:DataService, public router:Router){
    this.titleService.setTitle('Resource Management');
   
  router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
        
    }else if(event instanceof NavigationEnd) {
    
    }
    else if(event instanceof NavigationError) {
  
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });
}
  }

