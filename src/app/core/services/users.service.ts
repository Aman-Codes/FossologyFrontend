import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userApiUrl: string

  constructor(private httpClient: HttpClient) {
    this.userApiUrl = environment.apiurl + "users";
  }

  getUsers(){
    let httpOptions = {
      headers: {
        'Authorization': `Bearer ${environment.token}`
      }
    };
    return this.httpClient.get(this.userApiUrl, httpOptions);
  }
}
