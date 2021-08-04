import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonOutputDto } from '../dto/output/PersonOutputDto';
import { environment } from '../../../environments/environment';
import { PersonInputDto } from '../dto/input/PersonInputDto';
import { Observable, Subject, Subscriber } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public clientes$ = new Subject<string>();

  //public observable = new Observable<String>();
  
  url:string;
  apiPerson: string ="persona";

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
  getAllPersons()
  {
    return this._http.get<PersonInputDto[]>(this.url+this.apiPerson);
  }
}
