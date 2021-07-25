import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunServiceService {
  i:number=1;
  constructor() { 
    console.log(`Construido ComunServiceService ${this.i} veces`)
    this.i++;
  }
}
