import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import {MaterialModule} from '../app/modules/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './modules/app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LocationService } from './services/location.service';
import { NavComponent } from './components/nav/nav.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    HomePageComponent,
    NavComponent,
    WeatherItemComponent,
    WeatherListComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })

  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
