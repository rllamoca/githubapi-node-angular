import { Project } from "../models/project";
import { ProjectDetail } from "../models/project_detail";
import { FileCommit } from "../models/file_commit";

export class Functions{
    baseuser = "rllamoca";
    baseurl = "https://api.github.com";
    axios = require('axios').default;
    instance;

    constructor(){
        this.instance = this.axios.create({
            baseURL: this.baseurl,
            timeout: 3000,
            headers: {'user-agent': 'node.js', 'Authorization': 'Basic ' + Buffer.from('rllamoca:203a3fd24f3e738de4c35eec3863ab20887e34e6').toString('base64')}
        });
    }
    
    async getProjects() : Promise<any>{
        try {
            const response = await this.instance.get("/users/"+ this.baseuser + "/repos");
            let returnProjects = [];
            for(var i in response.data){
                let nProject = new Project(response.data[i]);
                returnProjects.push(nProject.infoProject());
            }
            return returnProjects;
        } catch (error) {
            console.error(error);
        }
    }

    async getCommits(projectName: string) : Promise<any>{
        try {
            const response = await this.instance.get("/repos/"+ this.baseuser + "/" + projectName + "/commits");
            let returnCommits = [];
            for(var i in response.data){
                let nCommit = new ProjectDetail(response.data[i]);
                const responsefiles = await this.instance.get("/repos/"+ this.baseuser + "/" + projectName + "/commits/" + nCommit.sha);
                for(var fi in responsefiles.data.files){
                    let nFil = new FileCommit(responsefiles.data.files[fi]);
                    const contentFile = await this.instance.get(nFil.raw_url);
                    nFil.content = contentFile.data;
                    nCommit.files.push(nFil);
                }
                returnCommits.push(nCommit.detailProject());
            }
            return returnCommits;
        } catch (error) {
        }
    }

    async signGithub() : Promise<any>{
        try {
            const response = await this.instance.get("/users/"+ this.baseuser + "/repos");
            let returnProjects = [];
            for(var i in response.data){
                let nProject = new Project(response.data[i]);
                returnProjects.push(nProject.infoProject());
            }
            return returnProjects;
        } catch (error) {
            console.error(error);
        }
    }
    
}
