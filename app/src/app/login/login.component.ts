import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  error: string = "";
  showLoader: Boolean = false;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.showLoader = true;
    this.dataService.login(this.username)
    .subscribe(
      result => this.router.navigate(['project-detail']).then(()=> window.location.reload()),
      err => this.error = 'Could not authenticate'
    );
    this.username = "";
  }

}
