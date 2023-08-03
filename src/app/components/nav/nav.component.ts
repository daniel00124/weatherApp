import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppAction from "../../state/app.actions";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isThemeLight: boolean = false;
  currentUnit$!: string;
  currentUnit: string ="&#8451;"; 
  currentIconTheme:string="dark mode";
  dark_mode:string = "dark mode";
  light_mode:string = "light mode";
  constructor(private store:Store<any>) { }
  ngOnInit(): void {
    this.store.select('app').subscribe((state)=>{
      this.currentUnit$ = state.temperatureUnit;
    })
  }


  changeUnits():void {
    if(this.currentUnit == '&#8451;'){ 
      this.currentUnit = "&#8457;";
      this.store.dispatch({
        type:'ChangeToFer'
      });
    }
    else{                              
      this.currentUnit = "&#8451;";
      this.store.dispatch({
        type:'ChangeToCel'
      });
    }
  }

  changeMode():void{
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(this.currentIconTheme == 'dark mode'){ 
      this.currentIconTheme = "light mode";
    }
    else{                              
      this.currentIconTheme = "light mode";
      this.currentIconTheme = 'dark mode'
    }
  }
}
