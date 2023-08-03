import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../state/app.reducer';



@NgModule({
    imports: [
      StoreModule.forFeature('app',appReducer) 
    ]
  })
export class AppStoreModule {}
  