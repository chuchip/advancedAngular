import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonInputDto } from '../../../dto/input/PersonInputDto';
import { PersonService } from '../../../services/person.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Person } from 'src/app/person/services/Person';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss']
})
export class PersonaDetailComponent implements OnInit {

  person: PersonInputDto={
    id_persona:null,
    user:"",  
    password: "",
    name: "",
    surname:"",
    company_email:"",
    personal_email:"",
    city: "",
    active: true,
    imagen_url: "",
    termination_date: null,
  
   createdAt: new Date(),
   updatedAt:  new Date()
  }
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
      createdDate: [data.createdAt, Validators.required],
      terminationDate: [data.termination_date],
    });
  }

  getPerson$(person: PersonInputDto): void {
    this.person = person;
    //this.setForm();
  }

 

  addPerson(){
    let person = this.setPerson();
   
  }

  putPerson(){
    let person = this.setPerson();
//    this.personService.putPerson(this.person.id!, person).subscribe(person => {console.info(person)});
    this.router.navigate(['/person']);
  }

  setPerson(){
      
    let person:Person = new Person();
    person.setValues(this.personDetail.value["id_persona"], this.personDetail.value["user"], this.personDetail.value["password"], 
      this.personDetail.value["surname"], this.personDetail.value["companyEmail"], 
      this.personDetail.value["personalEmail"], this.personDetail.value["city"],  
      this.personDetail.value["active"], this.personDetail.value["createdDate"],
      new Date(),
      this.personDetail.value["terminationDate"])
    return person;
  }

  savePerson(){
    console.log("Salvando persona");
    const person=this.setPerson();

    this._personService.addPerson(person).subscribe(
      data => {console.log("Salvado registro: "+data)  ;
      this.router.navigate(['/person']);
    }
    );
    /*
    switch (this.action) {
      case "edit":        
        this.putPerson();
        break;
      case "add":
        this.addPerson();
        break;
      default:
        break;
    }
    */
  }
  public mover(id:number,event:any)
  {    
    event.preventDefault(); // Anulo evento de href
    if (id>0)
      this.router.navigate(['person',id]);
  }

}
