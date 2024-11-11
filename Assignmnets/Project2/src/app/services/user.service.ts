import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,map,Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users';  // Your JSON Server URL
  private usersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  // Add user
  addUser(user: any): Observable<any> {
    return this.getUsers().pipe(
      // After fetching users, find the maximum id and increment it
      map(users => {
        const maxId = Math.max(...users.map(u => u.id));  // Find the max current id
        user.id = maxId + 1; // Increment the id
        return user;
      }),
      switchMap(userWithId => {
        return this.http.post<any>(this.usersUrl, userWithId);
      })
    );
  }

  // Update user
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.usersUrl}/${id}`, user);
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.usersUrl}/${id}`);
  }

  // Set the user data for editing or when needed
  setUserData(user: any): void {
    // You can store the user data in a BehaviorSubject to be accessed later
    this.usersSubject.next([user]);
  }

  // Get user data from the BehaviorSubject (if needed for the form)
  getUserData(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }
}
