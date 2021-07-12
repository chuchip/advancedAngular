import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { PersonService } from '../person/services/person.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  public evento:string="";
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }

  
  pulsado():void 
  { 
    console.log("Creado evento");
    
    this.personService.clientes$.next(this.evento);
  }
}
