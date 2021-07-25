import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ManualService } from './shared/services/manual.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estudiantes';
  public url:string = environment.apiUrl;
  
}
