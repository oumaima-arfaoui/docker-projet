import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class userService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.API_URL;
  }
  create(user: User) {
    return this.http.post(`${this.url}/adduser`, user);
  }
  getallUsers() {
    return this.http.get(`${this.url}/getallusers`);
  }
  getUser(id: any) {
    return this.http.get(`${this.url}/getuser/${id}`);
  }
     updateUser(id:any,user: User){
    return this.http.put(`${this.url}/Flights/updateuser/${id}`,user);
       } 
  delete(id: any) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
