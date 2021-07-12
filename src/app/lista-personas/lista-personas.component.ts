import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { PersonService } from '../person/services/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {
  public campo: string="Valor Inicial";
  constructor(public personService: PersonService,
    private localStorageService: LocalStorageService) {     personService.clientes$.subscribe(a => this.recibidoEvento(a));}

  recibidoEvento(evento:string)
  {
      console.log("Recibido evento en listaPersonas: "+evento);
      this.localStorageService.setItem("localStorage-listaPersonasComponent",evento);
      localStorage.localStorage2=`He recibido este evento ${evento}`;
      sessionStorage.setItem('Nombre', 'Jesús')
      sessionStorage.Apellido = 'Puente'
      this.campo=evento;
      
  }
  ngOnInit(): void {
  }

}
