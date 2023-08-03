import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { LocationService } from 'src/app/services/location.service';
import * as AppAction from "../../state/app.actions";

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  DailyForecastsSub?:Subscription;
  CurrentForcastSub?:Subscription;
  stateSub?:Subscription;
  showError$:any;

  DailyForecasts: any[]=[];
  currentLocation:any;
  constructor(private locationService:LocationService, private store:Store<any>){}

  ngOnInit(): void {
    this.stateSub = this.store.select('app').subscribe((state)=>{
      this.currentLocation = state.currentLocation;
      this.showError$ =state.failed;
      if(state.getData){
        this.store.dispatch(AppAction.ChangeGetData());
        this.getDailyForecasts();
      }
    })    
    this.getDailyForecasts();
  }

  getDailyForecasts():void{
    this.CurrentForcastSub = this.locationService.loadCurrentForcast(this.currentLocation)
    .subscribe(
      (ForecastsData) =>{
      this.store.dispatch(
        AppAction.UpdateForecast5Days({ forecast: this.getForecast(ForecastsData) as any[] })
      );
    });
  }

  getForecast(ForecastsData:any):any[]{
    let dailyForecast = ForecastsData['DailyForecasts'];
    this.DailyForecasts = [];
    if(dailyForecast === undefined){
      return [];
    }else{
      dailyForecast.forEach((element:any) => {
        let date = new Date(element['Date']);
        let fullDate = date.getDate() + '/' + (date.getMonth() +1) + '/' + date.getFullYear();
        this.DailyForecasts.push({
          id: (Math.random()*1000).toFixed(0),
          day: GlobalConstants.days[new Date(element['Date']).getDay()],
          date:fullDate ,
          IconDay:GlobalConstants.getIconWeather(element['Day']['Icon']),
          TemperatureDay:element['Temperature']['Maximum']['Value'] ,
          IconNight:GlobalConstants.getIconWeather(element['Night']['Icon']) ,
          TemperatureNight:element['Temperature']['Minimum']['Value']
        })

      });
    }
    return this.DailyForecasts;
  }
  getFullDayName(date:Date):string{
    return GlobalConstants.days[date.getDay()];
  }

  ngOnDestroy(): void {
    this.DailyForecastsSub?.unsubscribe();
    this.CurrentForcastSub?.unsubscribe();
    this.stateSub?.unsubscribe();

  }
}
