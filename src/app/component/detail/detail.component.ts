import { Component, OnInit} from '@angular/core';


import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import {HttpClient} from '@angular/common/http';


//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //@Input() restaurantID: number;

  restaurantData: any = {};

  private inMemAPIUrl = 'api/restaurants'

  constructor(private http: HttpClient,  private router: Router,
    private route: ActivatedRoute,  
    private location: Location  
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

     this.http.get(this.inMemAPIUrl).subscribe(restaurantData => {
      this.restaurantData = restaurantData[id];
      console.log(this.restaurantData);

    });

  }

  goBack(): void {
    this.location.back();
  }

}
