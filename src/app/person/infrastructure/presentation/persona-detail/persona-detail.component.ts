import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonInputDto,defaultPersonInputDto } from '../../../dto/input/PersonInputDto';
import { PersonService } from '../../../services/person.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PersonOutputDto } from 'src/app/person/dto/output/PersonOutputDto';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss']
})
export class PersonaDetailComponent implements OnInit {

  person: PersonInputDto=defaultPersonInputDto;
  //action!: string;
  public errorDb:boolean=false;
  public msgErrorDb:string="";
  personDetail=this.formBuilder.group({   id_persona: ""});
 
  idActive:number=0;

  constructor(private _personService: PersonService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    const action = this.route.snapshot.paramMap.get("id")!;
//    console.log("En Constructor de PersonaDetailComponent:"+action);
   }

  ngOnInit() {
   
    this.route.data.subscribe(data => {      
      this.person = data.person;     
      this.idActive = this.person.id_persona==null?0:this.person.id_persona;
      console.log(this.idActive);
      this.initFormBuilder(this.person);       
    });

    //console.log("En ngOnInit de PersonaDetailComponent:");
/*
    this.route.params.subscribe(routeParams => {      
      var selectedId = routeParams.id;
      console.log("SelectedId: "+selectedId);
      if (selectedId==0)
      {
        this.initFormBuilder(this.person);     
        return;
      }
      this._personService.findById(selectedId).subscribe(
          data => {  
           // console.log(`Buscado detalle de id ${id}`)
            // console.log(data);
            this.person=data;
            this.initFormBuilder(this.person);       
      },
      error => 
       {
         console.log("Se produjo un error");
         console.log(error);
         this.errorDb=true;
         this.msgErrorDb=error.message;
       });  
    });
    */
  }
  /*
  // La carga se hace en el resolver
  //
  cargaDatos(selectedId:number)
  {
    console.log("SelectedId: "+selectedId);
    if (selectedId==0)
    {
      this.initFormBuilder(this.person);     
      return;
    }
    this._personService.findById(selectedId).subscribe(
        data => {  
         // console.log(`Buscado detalle de id ${id}`)
          // console.log(data);
       
          this.person=data;
          this.initFormBuilder(this.person);       
    },
    error => 
     {
       console.log("Se produjo un error");
       console.log(error);
       this.errorDb=true;
       this.msgErrorDb=error.message;
     }); 
  }
  */
  initFormBuilder(data:PersonInputDto)
  {
    this.personDetail = this.formBuilder.group({
      id_persona: [data.id_persona],
      user: [data.user, Validators.required],
      name: [data.name, Validators.required],
      surname: [data.surname, Validators.required],
      password: [data.password, [Validators.required, Validators.minLength(8)]],
      companyEmail: [data.company_email, [Validators.required, Validators.email]],
      personalEmail: [data.personal_email, [Validators.required, Validators.email]],
      city: [data.city, Validators.required],
      active: [data.active, Validators.required],
      createdDate: [data.createdAt,],
      updateDate: [data.updatedAt],
      terminationDate: [data.termination_date],
    });
  }

  getPerson$(person: PersonInputDto): void {
    this.person = person;
    //this.setForm();
  }

 
  async savePerson(){
    console.log("Salvando persona");
    
    
    const person:PersonOutputDto={     
      user : this.personDetail.value["user"],
      password : this.personDetail.value["password"],
      name: this.personDetail.value["surname"],
      surname : this.personDetail.value["surname"],
      company_email : this.personDetail.value["companyEmail"], 
      personal_email : this.personDetail.value["personalEmail"],
      city : this.personDetail.value["city"],  
      imagen_url : '',  
      active :   this.personDetail.value["active"], 
      createdAt : this.personDetail.value["createdDate"],
      updatedAt :  new Date(),
      termination_date :    this.personDetail.value["terminationDate"]
    }

   
    
    var result = await this._personService.setPerson(this.idActive,person);
    console.log(result);
    this.router.navigate(['/person']);
    /*.subscribe(
      data => {
              console.log("Salvado registro: "+data);
              this.router.navigate(['/person']);
              },
      error =>{ console.log("Error al guardar persona"+error)})  ;      */
  }
  public mover(id:number,event:any)
  {    
    event.preventDefault(); // Anulo evento de href
    if (id>0)
      this.router.navigate(['person',id]);
  }

}
