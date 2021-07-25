import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LoggerService {
  i:number=1;
  constructor() { 
    console.log(`Construido LoggerService ${this.i} veces`)
    this.i++;
  }
  log(message:any) {
    console.log(message);
  }
}

