import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  // read path param and display the details of that particular user
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userId = params['id']; // '2'
      this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(userData => {
        this.user = userData;
      })
    });
  }
}
