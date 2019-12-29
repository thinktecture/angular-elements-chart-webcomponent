import { Component, OnInit } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[];

  ngOnInit(): void {
    this.data = data;
  }  
}
