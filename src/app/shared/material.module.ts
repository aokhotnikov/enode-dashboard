import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const MAT_MODULES = [
  MatIconModule,
  MatSortModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MAT_MODULES],
  exports: [...MAT_MODULES],
})
export class MaterialModule { }
