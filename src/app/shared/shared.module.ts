import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { ComponentsModule } from '@app/shared/components/components.module';

const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ComponentsModule,
  MaterialModule
];

@NgModule({
  imports: [ ...SHARED_MODULES ],
  exports: [ ...SHARED_MODULES ]
})
export class SharedModule { }
