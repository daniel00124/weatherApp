import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { GlobalConstants } from "../common/global-constants";
import { City } from "../state/app.reducer";
import * as AppAction from "../state/app.actions";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class LocationService{
    isFailed:boolean=false;
    constructor(private http:HttpClient,private store:Store<any>,private _snackBar: MatSnackBar){}


    loadLocationAutoComplete(val:string,fail:boolean):Observable<any>{
        return this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${GlobalConstants.apiKey}&q=${val}`)
        .pipe(
            catchError(error =>{
                if(!fail){
                    this.store.dispatch(AppAction.UpdateFail());
                }
                this._snackBar.open("There is an error probably beacuse we use in free trail api, please try again later", "x",{
                    duration:5000
                })
                return of([]);
            })
        );
    }

    loadCurrentWeater(location:City,fail:boolean):Observable<any>{
        return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${location.key}?apikey=${GlobalConstants.apiKey}&details=${true}`)
        .pipe(
            catchError(error =>{
                if(!fail){
                   this.store.dispatch(AppAction.UpdateFail());
                }
                this._snackBar.open("There is an error probably beacuse we use in free trail api, please try again later", "x",{
                    duration:5000
                })
                return of([]);

            })
        );
    }

    loadCurrentForcast(location:City):Observable<any>{
        return this.http.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.key}?apikey=${GlobalConstants.apiKey}&details=${true}&metric=${true}`)
        .pipe(
            catchError(error =>{
                return of([]);
            })
        );
    }

}