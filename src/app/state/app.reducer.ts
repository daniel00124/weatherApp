import { createReducer ,on} from "@ngrx/store";
import * as AppAction from "./app.actions";

export interface City{
    name:string;
    key:string;
    country:string
}

export interface ForecastItem{
    date:string;
    IconDay:string;
    TemperatureDay:number;
    IconNight:string;
    TemperatureNight:number;
}

export interface FavoriteItem{
    ID:number;
    locationName:string;
    locationKey:string;
    date:string;
    Icon:string;
    Temperature:number;
}


export interface AppState{
    darktheme:boolean;
    temperatureUnit:string;
    currentLocation:any; 
    locationAutoComplete:any[]; 
    locationCurrentWeather:any;
    Forecast5Days:ForecastItem[];
    Favorites:FavoriteItem[];
    getData:boolean;
    failed:boolean;
    
}


export const initialState:AppState = {
    darktheme:true,
    temperatureUnit:'C',
    currentLocation:{
        name:"Tel Aviv",
        key:"215854",
        country:"Israel",
    },
    locationAutoComplete:[],
    locationCurrentWeather:{
        Temperature: '0',
        WeatherIcon: '',
        WeatherText: '',
        RealFeelTemperature: 0,
        RealFeelTemperatureShade: 0,
        RelativeHumidity: '',
        Wind: ''    
    },
    Forecast5Days:[],
    Favorites:[],
    getData:false,
    failed:false
}
const _appReducer = createReducer(
    initialState,
    on(AppAction.UdateLocationAutoComplete, (state, { allLocations }) => {
      return {
        ...state,  
        locationAutoComplete:allLocations
        };
    }),
    on(AppAction.UpdateCurrentLocation, (state, { currentCity }) => {
        return {
          ...state,  
          currentLocation:currentCity
          };
      }),
    on(AppAction.UpdateLocationCurrentWeather, (state, { currentCityWeather }) => {
        return {
            ...state,  
            locationCurrentWeather:currentCityWeather
        };
    }),
    on(AppAction.UpdateForecast5Days, (state, { forecast }) => {
        return {
            ...state,  
            Forecast5Days:forecast
        };
    }),
    on(AppAction.UpdateFail, (state) => {
        return{
            ...state,
            failed:true,
        };
    }), 
    on(AppAction.ChangeGetData, (state) => {
        return{
            ...state,
            getData:!state.getData,
        };
    }), 
    on(AppAction.ChangeToCel, state => {
        return{
            ...state,
            temperatureUnit:'C'
        };
    }),
    on(AppAction.ChangeToFer, state => {
        return{
            ...state,
            temperatureUnit:'F'
        };
    }),

    on(AppAction.DeleteFromFavorite, (state, { favorites }) => {
        return {
          ...state,  
          Favorites:favorites
          };
      }),
      on(AppAction.AddToFavorite, (state, { favorites }) => {
        return {
          ...state,  
          Favorites:favorites
          };
      }),
  );
export function appReducer(state: any, action: any) {
return _appReducer(state, action);
}
