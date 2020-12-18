import { Owner } from '../models/owner'
export class Project {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage?: any;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: any;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;

    constructor(definition: any){
        this.id = definition.id;
        this.node_id = definition.string;
        this.name = definition.name;
        this.full_name = definition.full_name;
        this.private = definition.private;
        this.owner = definition.owner as Owner;
        this.html_url = definition.html_url;
        this.description = definition.description;
        this.fork = definition.fork;
        this.url = definition.url;
        this.forks_url = definition.forks_url;
        this.keys_url = definition.keys_url;
        this.collaborators_url = definition.collaborators_url;
        this.teams_url = definition.teams_url;
        this.hooks_url = definition.hooks_url;
        this.issue_events_url = definition.issue_events_url;
        this.events_url = definition.events_url;
        this.assignees_url = definition.assignees_url;
        this.branches_url = definition.branches_url;
        this.tags_url = definition.tags_url;
        this.blobs_url = definition.blobs_url;
        this.git_tags_url = definition.git_tags_url;
        this.git_refs_url = definition.git_refs_url;
        this.trees_url = definition.trees_url;
        this.statuses_url = definition.statuses_url;
        this.languages_url = definition.languages_url;
        this.stargazers_url = definition.stargazers_url;
        this.contributors_url = definition.contributors_url;
        this.subscribers_url = definition.subscribers_url;
        this.subscription_url = definition.subscription_url;
        this.commits_url = definition.commits_url;
        this.git_commits_url = definition.git_commits_url;
        this.comments_url = definition.comments_url;
        this.issue_comment_url = definition.issue_comment_url;
        this.contents_url = definition.contents_url;
        this.compare_url = definition.compare_url;
        this.merges_url = definition.merges_url;
        this.archive_url = definition.archive_url;
        this.downloads_url = definition.downloads_url;
        this.issues_url = definition.issues_url;
        this.pulls_url = definition.pulls_url;
        this.milestones_url = definition.milestones_url;
        this.notifications_url = definition.notifications_url;
        this.labels_url = definition.labels_url;
        this.releases_url = definition.releases_url;
        this.deployments_url = definition.deployments_url;
        this.created_at = definition.created_at;
        this.updated_at = definition.updated_at;
        this.pushed_at = definition.pushed_at;
        this.git_url = definition.git_url;
        this.ssh_url = definition.ssh_url;
        this.clone_url = definition.clone_url;
        this.svn_url = definition.svn_url;
        this.homepage = definition.homepage;
        this.size = definition.size;
        this.stargazers_count = definition.stargazers_count;
        this.watchers_count = definition.watchers_count;
        this.language = definition.language;
        this.has_issues = definition.has_issues;
        this.has_projects = definition.has_projects;
        this.has_downloads = definition.has_downloads;
        this.has_wiki = definition.has_wiki;
        this.has_pages = definition.has_pages;
        this.forks_count = definition.forks_count;
        this.mirror_url = definition.mirror_url;
        this.archived = definition.archived;
        this.disabled = definition.disabled;
        this.open_issues_count = definition.open_issues_count;
        this.license = definition.license;
        this.forks = definition.forks;
        this.open_issues = definition.open_issues;
        this.watchers = definition.watchers;
        this.default_branch = definition.default_branch;
    }

    infoProject(): object {
        return {
            "name": this.name,
            "id": this.id,
            "private": this.private
        }
    }
}