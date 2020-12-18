export class Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;

    constructor(definition: any){
        this.login = definition.login;
        this.id = definition.id;
        this.node_id = definition.node_id;
        this.avatar_url = definition.avatar_url;
        this.gravatar_id = definition.gravatar_id;
        this.url = definition.url;
        this.html_url = definition.html_url;
        this.followers_url = definition.followers_url;
        this.following_url = definition.following_url;
        this.gists_url = definition.gists_url;
        this.starred_url = definition.starred_url;
        this.subscriptions_url = definition.subscriptions_url;
        this.organizations_url = definition.organizations_url;
        this.repos_url = definition.repos_url;
        this.events_url = definition.events_url;
        this.received_events_url = definition.received_events_url;
        this.type = definition.type;
        this.site_admin = definition.site_admin;    
    }
}