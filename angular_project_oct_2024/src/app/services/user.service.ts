import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRole: string = 'teacher';

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

}
