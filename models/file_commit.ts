export class FileCommit {
    filename: string;
    sha: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    raw_url: string;
    content: string;

    constructor(definition: any){
        this.filename = definition.filename;
        this.sha = definition.sha;
        this.status = definition.status;
        this.additions = definition.additions;
        this.deletions = definition.deletions;
        this.changes = definition.changes;
        this.raw_url = definition.raw_url;
    }
}