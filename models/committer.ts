export class Committer {
    name: string;
    email: string;
    date: Date;

    constructor(definition: any){
        this.name = definition.name;
        this.email = definition.email;
        this.date = definition.date;
    }
}