import {Component} from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
    selector:'loader',
    template:"<div [ngClass]=\"{'loading':loadingService.loader}\"></div>"
})
export class loaderComponent {
    constructor(public loadingService:DataService){
        
    }
}