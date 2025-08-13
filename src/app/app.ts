import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'chakra-admin';
  http = inject(HttpClient);
  users: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('/api/data/users').subscribe(data => {
      this.users = data;
    });
  }
}
