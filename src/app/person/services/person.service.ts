import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonOutputDto } from '../dto/output/PersonOutputDto';
import { environment } from '../../../environments/environment';
import { PersonInputDto } from '../dto/input/PersonInputDto';



@Injectable({
  providedIn: 'root'
})
export class PersonService {
  contador: number=0;
  url:string;
  apiPerson: string ="/person";

  constructor(private _http:HttpClient) { 
    this.url=environment.apiUrl;
    console.log("URL: {{this.url}} " );
  }
 
 // constructor() {} 
  addPerson(person: PersonOutputDto)
  {
    console.log(`Llamando a ${this.url} ${this.apiPerson}  Name: ${person.name}` );
    return this._http.post<PersonInputDto>(this.url+this.apiPerson,person);
  }
}
