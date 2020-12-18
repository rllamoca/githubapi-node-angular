export class Tree {
    sha: string;
    url: string;

    constructor(definition: any){
        this.sha = definition.sha;
        this.url = definition.url;
    }
}