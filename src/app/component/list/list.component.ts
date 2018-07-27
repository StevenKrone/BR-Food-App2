import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Location } from '@angular/common';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // private restaurantsUrl = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
   private inMemAPIUrl = 'api/restaurants'

  data: any = [];

  constructor(  private http: HttpClient,  private router: Router, private _sanitizer: DomSanitizer, private location: Location   ) { }

  ngOnInit() {
      this.http.get(this.inMemAPIUrl).subscribe(data => {
      this.data = data;
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }

  goToDetail(id:any): void{
      
      this.router.navigate(['/detail', id ]);
      //this.router.navigate(['/tribedetail', this.selectedTribe.id]);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  goBack(): void {
    this.location.back();
  }

}
