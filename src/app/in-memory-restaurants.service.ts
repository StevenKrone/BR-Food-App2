import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


import {RootObject} from './interfaces/root-object';
import {Restaurant} from './interfaces/restaurant';
import {Location} from './interfaces/location';
import {Contact} from './interfaces/contact';


@Injectable({
  providedIn: 'root'
})
export class InMemoryRestaurantsService implements InMemoryDbService {

createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    let restaurants = [{
        name: "Hopdoddy Burger Bar",
        backgroundImageURL: "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png",
        category: "Burgers",
        contact: {
          phone: "9723872337",
          formattedPhone: "(972) 387-2337",
          twitter: "hopdoddy"
          },
        location: {
          address: "5100 Belt Line Road, STE 502",
          crossStreet: "Dallas North Tollway",
          lat: 32.950787,
          lng: -96.821118,
          postalCode: "75254",
          cc: "US",
          city: "Addison",
          state: "TX",
          country: "United States",
          formattedAddress: [
            "5100 Belt Line Road, STE 502 (Dallas North Tollway)",
            "Addison, TX 75254",
            "United States"
          ]
        }
      },
      {
            name: "Pappadeaux Seafood Kitchen",
            backgroundImageURL: "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png",
            category: "Seafood",
            contact: {
              phone: "9724479616",
              formattedPhone: "(972) 447-9616",
              twitter: "pappadeaux"
            },
            location: {
              address: "18349 Dallas Pkwy",
              crossStreet: "at Frankford Rd.",
              lat: 32.99908456526653,
              lng: -96.83018780592823,
              postalCode: "75287",
              cc: "US",
              city: "Dallas",
              state: "TX",
              country: "United States",
              formattedAddress: [
                "18349 Dallas Pkwy (at Frankford Rd.)",
                "Dallas, TX 75287",
                "United States"
              ]
            }
      }];
      
  


    return {restaurants};
  }

}
