import {Component,Input,Output,EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { DataService } from '../core/services/data.service';
import { AuthService } from '../core/services/auth.service';
import {Response} from '@angular/http'
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
declare var swal:any;
@Component({
  moduleId: module.id,
  selector: 'login-container', 
  templateUrl: 'login.component.html',
})
export class LoginComponent{
formLogin={
   username:'',
   password:''
};
   loginStatus=false;
    constructor(private authService:AuthService,private DataService:DataService, public router:Router,public titleService:Title){            
        this.titleService.setTitle('Login');
    }
    doAuth=function(){
        alert(this.formLogin.username);
        this.authService.getAuth(this.formLogin.username,this.formLogin.password).subscribe((res:Response)=>{
            this.loginStatus=res;
            if(res) {
                this.authService.authUser=true;
                this.router.navigate(['dashboard']);
            }     
            },
      (error:any)=>{
        swal('error',"The Request encountered an error, please try again after some time","error");
         this.service.loader=false;
    })
          
          return false;
    }
}