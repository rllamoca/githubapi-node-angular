import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  projects = [];
  commits = [];
  httpOptions: any;
  
  constructor(private http: HttpClient) { }

  login(username: string): Observable<boolean> {
    return this.http.post<{token: string}>('/api/identify', {name: username})
      .pipe(
        map(result => {
          localStorage.setItem('auth_user', username);
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('auth_user');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  public getProjects(): Observable<any>{
    this.setHeaders();
    return this.http.get<any>('/api/projects', this.httpOptions)
  }

  public getCommits(projectName: string): Observable<any>{
    this.setHeaders();
    return this.http.get<any>('/api/projects/' + projectName, this.httpOptions)
  }

  public getFileContent(urlFile: string): Observable<any>{
    this.setHeaders();
    return this.http.post<any>('/api/commit/', {urlFile: urlFile}, this.httpOptions);
  }

  public setHeaders(){
    this.httpOptions = {
      headers: new HttpHeaders(
        { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      )
    };
  }

  /*  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }*/
}
