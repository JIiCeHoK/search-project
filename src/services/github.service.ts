import { user } from './../Iuser';
import { Users } from 'src/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private requestString: string = '';
  constructor() {}

  getRequest(request: string): void {
    const requestString$ = new Observable();
    this.requestString = request;
  }

  getUsers(): void {
    console.log(this.requestString);
    const result = Users.filter(
      (element) =>
        element.name.toUpperCase() === this.requestString.toUpperCase()
    );
    console.log(result);
    //return result;
  }
}
