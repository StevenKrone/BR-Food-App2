import { Component } from '@angular/core';

import { Location } from '@angular/common';

// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private location: Location  
   ) {

  }

  ngOnInit(): void {
    
  }

  goBack(): void {
    this.location.back();
  }

}
