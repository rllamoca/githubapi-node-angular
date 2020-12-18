export class Parent {
    sha: string;
    url: string;
    html_url: string;

    constructor(definition: any){
        this.sha = definition.sha;
        this.url = definition.url;
        this.html_url = definition.html_url;
    }

}