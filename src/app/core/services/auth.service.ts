import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    authUrl:string='/api/loginauth/';
    authUser:boolean=false;
    constructor(private http:Http){
    }
     getAuth(user: string,pass: string) : Observable<any>{
        alert('service');
       let bodyForm={
           sendUser:user,
           sendPass:pass
       }
       let loggedUser=false;
       return this.http.post(this.authUrl,bodyForm)
                    .map((res: Response) => {
                        loggedUser=res.json().loginStatus;
                      
                        return loggedUser;
                    })
                    .catch(() => {
                        return "Error Occured while login" ;
                    });
    }
}