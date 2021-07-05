import { Component, NgModule, OnInit } from '@angular/core';
import { PersonInputDto } from './dto/input/PersonInputDto';
import { AbstractControl, FormBuilder, FormGroup,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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


export class PersonComponent {

  public texto: string = "Hola";
  public personInputDto: PersonInputDto = {
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
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      user: [this.personInputDto.user,[Validators.required,forbiddenNameValidator(/bob/i)]]
    });
   }


  onSubmit()
  {
    console.log("En onsubmit");
  }
  
}
