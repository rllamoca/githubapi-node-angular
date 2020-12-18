import { Author2 } from "./author2";
import { Commit } from "./commit";
import { Committer2 } from "./committer2";
import { FileCommit } from "./file_commit";
import { Parent } from "./parent";

export class ProjectDetail {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: Author2;
    committer: Committer2;
    parents: Parent[];
    files?: FileCommit[] = [];

    constructor(definition: any){
        this.sha = definition.sha;
        this.node_id = definition.node_id;
        this.commit = new Commit(definition.commit);
        this.url = definition.url;
        this.html_url = definition.html_url;
        this.comments_url = definition.comments_url;
        this.author = new Author2(definition.author);
        this.committer = new Committer2(definition.committer);

        let pard = [];
        for(var i in definition.parents){
            pard.push(new Parent(definition.parents[i]));
        }
        this.parents = pard;
    }

    detailProject(): Object{
        return {
            "autor": this.commit.author.name,
            "email": this.commit.author.email,
            "message": this.commit.message,
            "sha": this.sha,
            "autor_usuario": this.committer.login,
            "imagen_usuario": this.committer.avatar_url,
            "date": this.commit.author.date,
            "archivos": this.files,
            "html_url": this.html_url
        }
    }

}
