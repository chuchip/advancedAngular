import { PersonDto } from "../PersonDto";

export interface PersonInputDto extends PersonDto {
     id_persona: number  | null, 
}
export const defaultPersonInputDto:PersonInputDto={  
     id_persona: 0, 
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
 