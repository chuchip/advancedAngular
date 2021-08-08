import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ErrorDialogService} from './error-dialog-service';
import { GlobalErrorHandler } from './errors/global-error-handler';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public errorDialogService: ErrorDialogService ,private injector: Injector, private zone: NgZone) {
    console.log("Iniciando servicio HttpInterceptorService");
    console.log(errorDialogService);
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Paso por interceptor. URL: "+req.url)
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse) => {
        console.warn("Ocurrio un error en una llamada Http");
        // console.error(error);
         let dialogRef = this.errorDialogService.openDialog(error.message,error.status);
         return throwError("Error gordo en HTTP")
      })
    );    
  }
 
  
}
