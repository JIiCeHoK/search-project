import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-test-obs',
  templateUrl: './test-obs.component.html',
  styleUrls: ['./test-obs.component.less'],
})
export class TestObsComponent implements OnInit {
  @Input()
  inputString: string = '';

  public arrayInput: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  save_input(): void {
    this.arrayInput.push(this.inputString);
  }

}
