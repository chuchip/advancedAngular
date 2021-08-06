import { PersonInputDto } from "../dto/input/PersonInputDto"


export class Person implements PersonInputDto
{
    id_persona!:number;
    user=""; 
    password= "";
    name= "";
    surname="";
    company_email="";
    personal_email="";
    city= "";
    active= true;
    imagen_url= "";
    termination_date!:Date;
    createdAt:Date=new Date();
    updatedAt:Date=new Date();
    
    constructor(){}

    public setValues(id: number, user: string, password: string, surname: string, company_email: string, personal_email: string, city: string, active: boolean, createdAt: Date, updateDate:Date,
        termination_date: Date){
        this.id_persona = id;
        this.user = user;
        this.password = password;
        this.surname = surname;
        this.company_email = company_email;
        this.personal_email = personal_email;
        this.city = city;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updateDate;
        this.termination_date = termination_date;
    }}