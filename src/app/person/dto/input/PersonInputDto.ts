export class PersonInputDto
{
    constructor (
        public user: string,
        public password: string,
        public surname: string,
        public company_email: string,
        public personal_email: string,
        public city: string,
        public active: boolean,
        public created_date: Date,
        public termination_date: Date,
    ) {}
}