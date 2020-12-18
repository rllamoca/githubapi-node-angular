import { Author } from "./author";
import { Committer } from "./committer";
import { Tree } from "./three";
import { Verification } from "./verification";

export class Commit {
    author: Author;
    committer: Committer;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;

    constructor(definition: any){
        this.author = new Author(definition.author);
        this.committer = new Committer(definition.committer);
        this.message = definition.message;
        this.tree = new Tree(definition.tree);
        this.url = definition.url;
        this.comment_count = definition.comment_count;
        this.verification = new Verification(definition.verification);
    }
}