import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { PageComponent } from '@app/pages/page.component';
import { PageRoutingModule } from '@app/pages/page-routing.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule
  ]
})
export class PageModule { }
