import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private userApiUrl: string

  constructor(private httpClient: HttpClient) {
    this.userApiUrl = environment.apiurl + "uploads";
  }

  getUploads() {
    let httpOptions = {
      headers: {
        'Authorization': `Bearer ${environment.token}`
      }
    };
    return this.httpClient.get(this.userApiUrl, httpOptions);
  }
}
