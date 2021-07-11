import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person/services/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {
  public campo: string="Valor Inicial";
  constructor(public personService: PersonService) {     personService.clientes$.subscribe(a => this.recibidoEvento(a));}

  recibidoEvento(evento:string)
  {
      console.log("Recibido evento en listaPersonas: "+evento);
      this.campo=evento;
  }
  ngOnInit(): void {
  }

}
