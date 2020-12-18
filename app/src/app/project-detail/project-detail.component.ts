import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
import { Router } from '@angular/router';
registerLocaleData(localeFr, 'es');

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: any;
  commits: any;
  selectedCommit: any;
  selectedFile: any;
  showLoader: Boolean = false;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    /*
    this.project = {
      "name": "tonight",
      "id": 322116245,
      "private": false
    }
    this.commits = [
          {
              "autor": "Renato",
              "email": "renato.llamoca@tecsup.edu.pe",
              "message": "dev",
              "sha": "fae930db74dbbd11e312550f6cb769d68d7d0fcb",
              "autor_usuario": "rllamoca",
              "imagen_usuario": "https://avatars3.githubusercontent.com/u/62492982?v=4",
              "date": "2020-12-16T22:38:15Z",
              "archivos": [
                  {
                      "filename": "index.html",
                      "sha": "37d8675fc0a706d4ea62f38b41469bf3fa9c5ed9",
                      "status": "added",
                      "additions": 1,
                      "deletions": 0,
                      "changes": 1,
                      "raw_url": "https://github.com/rllamoca/tonight/raw/fae930db74dbbd11e312550f6cb769d68d7d0fcb/index.html"
                  }
              ],
              "html_url": "https://github.com/rllamoca/tonight/commit/fae930db74dbbd11e312550f6cb769d68d7d0fcb"
          },
          {
              "autor": "rllamoca",
              "email": "62492982+rllamoca@users.noreply.github.com",
              "message": "Initial commit",
              "sha": "3acc9c186d536734e8abab4819ecf9552289c6d4",
              "autor_usuario": "web-flow",
              "imagen_usuario": "https://avatars3.githubusercontent.com/u/19864447?v=4",
              "date": "2020-12-16T22:22:09Z",
              "archivos": [
                  {
                      "filename": ".gitignore",
                      "sha": "67045665db202cf951f839a5f3e73efdcfd45021",
                      "status": "added",
                      "additions": 104,
                      "deletions": 0,
                      "changes": 104,
                      "raw_url": "https://github.com/rllamoca/tonight/raw/3acc9c186d536734e8abab4819ecf9552289c6d4/.gitignore"
                  },
                  {
                      "filename": "README.md",
                      "sha": "24d856314bbdb33cf3449cfd9127101dc8ce2ea4",
                      "status": "added",
                      "additions": 2,
                      "deletions": 0,
                      "changes": 2,
                      "raw_url": "https://github.com/rllamoca/tonight/raw/3acc9c186d536734e8abab4819ecf9552289c6d4/README.md"
                  }
              ],
              "html_url": "https://github.com/rllamoca/tonight/commit/3acc9c186d536734e8abab4819ecf9552289c6d4"
          }
      ];
*/
    this.showLoader = true;
    this.dataService.getProjects().subscribe(
      (result) => {
        for(var i in result.result){
          this.project = result.result[i];          
        }
        if(typeof this.project !== "undefined"){
          this.dataService.getCommits(this.project.name).subscribe(
            (result) => {
              this.commits = result.result;
              this.showLoader = false;
            }
          );
        }
      },
      (err) => { if(err.status == 403) this.router.navigate(['login']) }
//      err => this.error = 'Could not authenticate'
    );
  }

  public selectCommit(commit: any){
    this.selectedCommit = commit;
  }

  public selectFile(file: any){
    this.selectedFile = file;
    this.dataService.getFileContent(file.raw_url).subscribe(
      (result) => {
        file.content = result.result
        console.log(this.selectedFile);
      }
    );
  }

}
