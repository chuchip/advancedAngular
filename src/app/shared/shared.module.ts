import { ErrorHandler, NgModule } from "@angular/core";

import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "./angular-material";
import { ErrorDialogService } from "./error-dialog-service";
import { HttpInterceptorService } from "./http-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

const sharedComponents = [ ErrorDialogComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [...sharedComponents],
  providers: [
    
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService,multi: true },      
    ErrorDialogService,
       { provide: ErrorHandler, useClass: ErrorDialogService },
      ],
  entryComponents: [...sharedComponents]
})
export class SharedModule {}
