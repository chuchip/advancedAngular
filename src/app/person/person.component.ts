import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { PersonInputDto } from './dto/input/PersonInputDto';
import { AbstractControl, FormBuilder, FormGroup,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from './services/person.service';
import { PersonOutputDto } from './dto/output/PersonOutputDto';
import { Subscription } from 'rxjs';


export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

/** A hero's name can't match the given regular expression */


export class PersonComponent implements OnDestroy{
  private subscriptions = new Subscription();
  
  public texto: string = "Hola";
  id_user?: number;
  public personOutputDto: PersonOutputDto = {   
   user: "chuchi",
   password: "",
   name: "",
   surname: "",
   company_email: "",
   personal_email: "",
   city: "",
   active: true,
   created_date: new Date()
  };
  form: FormGroup;
 
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private personService: PersonService
  ) {
    console.log("En constructor person");
    this.subscriptions.add(personService.clientes$.subscribe(evento => this.recibidoEvento(evento)));
    console.log("Person se suscribio");
    //personService.observable.subscribe(a => this.recibidoEvento(a));
    this.form = this._fb.group(this.personOutputDto);
   }
  ngOnDestroy(): void {
     try {
       this.subscriptions.unsubscribe();
     } catch (error)
     {
       console.log(error);
     }
     console.log("Person anulo la suscripcion");
  }

   recibidoEvento(evento: any)
   {
      console.log(`Recibido Evento en person: ${evento}`);
      this.form.controls.user.setValue(evento);
   }

  onSubmit()
  {
    console.log("En onsubmit");
    this.personService.addPerson(this.form.value).subscribe( 
      datos => {
        console.log(`Insertado registro con ID: ${datos.user}`);
        this.id_user=datos.id;
      },
      error => {
      console.log(`Error: ${error.error.mensaje}`);
      } );
  }
  
}
