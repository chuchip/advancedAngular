import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/person/services/person.service';

@Component({
  selector: 'app-persona-table',
  templateUrl: './persona-table.component.html',
  styleUrls: ['./persona-table.component.scss']
})
export class PersonaTableComponent implements OnInit {

  public seasons = {
    user: "USER",
    password: "PASSWORD",
    name: "NAME",
    surname:"SURNAME",
    company_email: "COMPANY EMAIL",
    personal_email: "PERSONAL EMAIL",
    city: "CITY",
    active: "ACTIVE"  ,
    termination_date: "TERMINATION DATE",
    createdAt: "CREATE DATE",
    updatedAt: "UPDATE DATE"
  }
  public arraySeasons:string[] =[];

  constructor( private _router: Router,
    private _route: ActivatedRoute, public _personService:PersonService) { 

    }

  ngOnInit(): void {
    this._personService.getAllPersons().subscribe( r => console.log(r));
    for (var str in this.seasons)
    {      
      this.arraySeasons.push(this.seasons[str]);
      
    }
  }

  
}
 