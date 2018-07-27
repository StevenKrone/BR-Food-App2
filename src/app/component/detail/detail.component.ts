import { Component, OnInit} from '@angular/core';


import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import {HttpClient} from '@angular/common/http';

import { ViewChild } from '@angular/core';
import {  } from '@types/googlemaps';


//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //@Input() restaurantID: number;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  restaurantData: any = {};

  private inMemAPIUrl = 'api/restaurants'


  lat: number;
  lng: number;
  zoom: number = 15;
  

  constructor(private http: HttpClient,  private router: Router,
    private route: ActivatedRoute,  
    private location: Location  
  ) { }

  ngOnInit() {



     //Request the Data specific to the Restaurant

    const id = +this.route.snapshot.paramMap.get('id');

     this.http.get(this.inMemAPIUrl).subscribe(restaurantData => {
      this.restaurantData = restaurantData[id];
      this.lat = restaurantData[id].location.lat;
      this.lng = restaurantData[id].location.lng;

      console.log(this.restaurantData);

    });

    //Instantiate the Embedded Google Maps (GMAPS)
    var mapProp = {
          center: new google.maps.LatLng(18.5793, 73.8143),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  

  goBack(): void {
    this.location.back();
  }

}
