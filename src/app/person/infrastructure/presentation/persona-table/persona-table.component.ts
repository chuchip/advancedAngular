import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/person/services/person.service';

@Component({
  selector: 'app-persona-table',
  templateUrl: './persona-table.component.html',
  styleUrls: ['./persona-table.component.scss']
})
export class PersonaTableComponent implements OnInit {

  constructor( private _router: Router,
    private _route: ActivatedRoute, public _personService:PersonService) { 

    }

  ngOnInit(): void {
    this._personService.getAllPersons().subscribe( r => console.log(r));
  }

  
}
