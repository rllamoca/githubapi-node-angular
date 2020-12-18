import { Project } from "../models/project";
import { ProjectDetail } from "../models/project_detail";
import { FileCommit } from "../models/file_commit";
import { readFileSync } from 'fs';

export class Functions{
    baseuser = "rllamoca";
    baseurl = "https://api.github.com";
    axios = require('axios').default;
    instance;

    constructor(){
        const file = readFileSync('./tokenfile.txt', 'utf-8');
        this.instance = this.axios.create({
            baseURL: this.baseurl,
            timeout: 3000,
            headers: {'user-agent': 'node.js', 'Authorization': 'Basic ' + Buffer.from('rllamoca:'+file).toString('base64')}
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
                    nFil.content = nFil.raw_url;
                    /* Estas lineas comentadas estaban intencionadas para traer el contenido del archivo
                    ya que el api nos devuelve una URL sin embargo se comento porque tomaba mucho tiempo
                     de ejecucion*/
                     
                    /*const contentFile = await this.instance.get(nFil.raw_url);
                    nFil.content = contentFile.data;*/
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
