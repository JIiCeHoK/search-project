import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent implements OnInit {
  @Input()
  request: string;

  constructor(private githubService: GithubService) {
    this.request = '';
  }

  ngOnInit(): void {}

  buttonClick(): void {
    console.log(this.request + ' Переднное значение через кнопку');
    this.githubService.getRequest(this.request);
  }
}
