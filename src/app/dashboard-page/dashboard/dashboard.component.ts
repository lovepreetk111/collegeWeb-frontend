import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private auth: DataService) { }

  ngOnInit(): void {
  }

  apiUrl = "http://localhost:3000/"
  onLogOut() {
    this.http.post(`${this.apiUrl}logout`, {}).subscribe((res) => {
      console.log(res);
      localStorage.removeItem('Token');
      this.router.navigate(['admin/auth/login']);
    });
  }
}
