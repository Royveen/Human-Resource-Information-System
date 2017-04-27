import { Injectable } from '@angular/core';
declare var swal:any;
@Injectable()
export class DialogService {

  success(message?:string){
        swal('success',message || 'Request completed successfully','success');
  }

  error(message?:string){
    swal('error',message || 'Error Occurred','error');
  }

  confirm(message?: string) {
    return new Promise<boolean>(resolve => {
      return resolve(swal({
      title:'',
      text: message || 'Is it OK?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    })
    );
    })
}
}