import { Inject, Injectable } from '@angular/core';
import { LoggerService } from './Logger.service';

@Injectable({
  providedIn: 'root'
})
export class ManualService {
  i:number=1;
  constructor(@Inject(LoggerService) private log:LoggerService) { 
    console.log(`Construido ManualService ${this.i} veces`)
    this.i++;
  }
}