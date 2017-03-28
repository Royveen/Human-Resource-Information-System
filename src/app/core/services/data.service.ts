import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IResource, IState,ILogin,ISeperation } from '../../shared/interfaces';

@Injectable()
export class DataService {
  
    resourcesBaseUrl: string = '/api/resources';
    authUrl:string='/api/loginauth/'
    resources: IResource[];
    loader:boolean=false;

    constructor(private http: Http) { }
    
   getResources() : Observable<IResource[]> {
       
        return this.http.get(this.resourcesBaseUrl)
                    .map((res: Response) => {
                        this.resources = res.json();
                       
                        return this.resources;
                    })
                    .catch(this.handleError);
    }
    
   getResource(id: string) : Observable<IResource> {
        return this.http.get(this.resourcesBaseUrl + '/' + id)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
                   .map((res: Response) => res.json())
                   .catch(this.handleError); 
    }
    
    addResource(resource: IResource) : Observable<boolean> {
        return this.http.post(this.resourcesBaseUrl + '/addroute' , resource)
                   .map((res: Response) => res)
                   .catch(this.handleError);
    }
    updateResource(id:string,changes:Object) : Observable<string> {
        return this.http.put(this.resourcesBaseUrl + '/' + id, changes)
                   .map((res: Response) => {
                       console.log(res);
                    try{
                        return res.json();
                    }catch(error){
                        return res["_body"];
                    }   
                   })
                   .catch(this.handleError);  
    }
   private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.status.toString();
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}
