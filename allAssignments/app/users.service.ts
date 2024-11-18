import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/users/');
  }
  getUser(id: string) {
    return this.httpClient.get(`http://localhost:3000/users/${id}`);
  }
  updateUser(id: string, payload: any) {
    return this.httpClient.patch(`http://localhost:3000/users/${id}`, payload);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }

  addUser(payload: any) {
    return this.httpClient.post(`http://localhost:3000/users/`, payload);
  }
}
