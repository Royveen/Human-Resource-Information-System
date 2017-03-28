import { Injectable } from '@angular/core';

import { IResource, IOrder } from '../../shared/interfaces';

@Injectable()
export class TrackByService {
  
  customer(index:number, customer: IResource) {
    return customer;
  }
  
}

