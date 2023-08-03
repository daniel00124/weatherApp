import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
