import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@app/shared/components/header/header.component';

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ]
})
export class ComponentsModule { }
