import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';

import { GroupComponent } from './pages/user/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
