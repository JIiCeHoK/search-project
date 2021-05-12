import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from 'src/services/github.service';
import { user } from 'src/Iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent implements OnInit {
  users: user[] = [];

  constructor(private githubService: GithubService) {}

  getNames(): void {
    // this.users = this.githubService.getUsers().subscribe();
  }

  ngOnInit() {
    this.getNames();
  }
}
