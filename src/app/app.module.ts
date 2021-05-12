import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { UserComponent } from '../components/user/user.component';
import { TestObsComponent } from '../components/test-obs/test-obs.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, UserComponent, TestObsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}