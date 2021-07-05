export interface PersonDto {
    user: string;
    password: string;
    name: string;
    surname: string;
    company_email: string;
    personal_email: string;
    city: string;
    active: boolean;
    created_date: Date;
    termination_date?: Date;
}