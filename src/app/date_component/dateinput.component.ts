import { Component, OnInit, Input} from '@angular/core';
declare var jQuery:any;
@Component({
    moduleId:module.id,
    selector:'datetime',
    templateUrl:'./datetime.component.html',
})
export class DatetimeComponent implements OnInit{

    dateModel="";
    @Input('ac-value') value: any;

    ngOnInit(){
       jQuery('.date')
    }

    constructor(){
    }


}