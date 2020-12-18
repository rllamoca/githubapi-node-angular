import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  project: any;
  iconProject: string = "";
  currentUser: any;

  constructor(public dataService: DataService, private router: Router,route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('auth_user');
    /*    this.project = {
          "name": "tonight",
          "id": 322116245,
          "private": false
        }
    */

    this.dataService.getProjects().subscribe(
      (result) => {
            for(var i in result.result){
              this.project = result.result[i];          
            }
        });
    
        if(this.project.private){
          this.iconProject = "fa-lock";
        }
        else{
          this.iconProject = "fa-unlock";
        }
  }

  logout(){
    this.dataService.logout();
    this.router.navigate(['login'])
  }

  isLoggedIn(): Boolean{
    return this.dataService.loggedIn;
  }

}
