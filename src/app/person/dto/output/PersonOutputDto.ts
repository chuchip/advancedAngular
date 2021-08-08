import { PersonDto } from "../PersonDto";

export interface PersonOutputDto extends PersonDto
{
}

export const defaultPersonOutputDto:PersonOutputDto={  
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
