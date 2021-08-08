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
  setPerson(idPerson:number, person: PersonOutputDto)
  {
    if (idPerson==0)
      return this._http.put<PersonInputDto>(`${this.url}${this.apiPerson} `,person).toPromise();
    else
      return this._http.put<PersonInputDto>(`${this.url}${this.apiPerson}/${idPerson}`,person).toPromise();
  }
  getAllPersons():Observable<any>
  {
    return this._http.get<PersonInputDto[]>(this.url+this.apiPerson);
  }
  findById(id:number):Observable<PersonInputDto>
  {
    //console.log(`Buscando ID: ${id}` );
    return this._http.get<PersonInputDto>(`${this.url}${this.apiPerson}/${id}/id`);
  }
  deleteBy(id:number):Promise<any>
  {
    return this._http.delete<PersonInputDto>(`${this.url}${this.apiPerson}/${id}`).toPromise();
  }
}
