import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() day:string="";
  @Input() iconDay:string="";
  @Input() iconNight:string="";
  @Input() date:string="";
  @Input() dayTemp:number=0;
  @Input() nightTemp:number=0;

  unit$:any;
  currentUnit:string = " &#8451;";
  constructor(private store:Store<any>) {
    this.store.select('app').subscribe((state)=>{
      this.unit$=state.temperatureUnit;
    })
   }

  ngOnInit(): void {
  }


  CelToFer(temp:number,unit:string):number{
    if(unit=='F'){
      this.currentUnit = " &#8457"
      return parseInt(((temp * 1.8)+32).toFixed(0));
    }
    this.currentUnit = " &#8451;"
    return temp;
  }
}
