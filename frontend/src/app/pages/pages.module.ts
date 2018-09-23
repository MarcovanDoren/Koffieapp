import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouterModule } from './pages-router.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './user/group/group.module';

import { GroupComponent } from './user/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRouterModule,
    OrderModule,
    UserModule,
    GroupModule,
    GroupComponent,
  ],
  declarations: []
})
export class PagesModule { }
