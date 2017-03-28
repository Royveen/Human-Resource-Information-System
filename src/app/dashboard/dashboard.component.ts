import {Component,Input,Output,EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { DataService } from '../core/services/data.service';
import {Response} from '@angular/http';

@Component({ 
  moduleId: module.id,
  selector: 'dashboard-container', 
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent{
}