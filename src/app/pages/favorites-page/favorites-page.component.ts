import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppAction from "../../state/app.actions";

@Component({
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  Favorites:any[] = [];
  currentUnit:string = " &#8451;";
  unit$:any;
  constructor(private store:Store<any>) {}

  ngOnInit(): void {
    this.store.select('app').subscribe((state)=>{
      this.Favorites = state.Favorites;
      this.unit$=state.temperatureUnit
    })

  }

  CelToFer(temp:number,unit:string):number{
    if(unit=='F'){
      this.currentUnit = " &#8457"
      return parseInt(((temp * 1.8)+32).toFixed(0));

    }
    this.currentUnit = " &#8451;"
    return temp;
  }
  goToWeather(element:any){
    this.store.dispatch( AppAction.UpdateCurrentLocation({ currentCity: {name:element['locationName'],key:element['locationKey'],country:element['country']} as any }))
  }

}
