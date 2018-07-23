import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private restaurantsUrl = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  private inMemAPIUrl = 'api/restaurants'

  public data: any = {};

  constructor( private http: HttpClient ) {

  }

  ngOnInit(): void { // adding the lifecycle hook ngOnInit
    this.http.get(this.inMemAPIUrl).subscribe(data => {
      this.data = data;
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }

}
