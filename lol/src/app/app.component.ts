import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {UserCardComponent} from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [
    JsonPipe,
    UserCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  httpClient: HttpClient = inject(HttpClient);
  users: any  = undefined
  constructor() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(users => this.users = users);

  }









}
