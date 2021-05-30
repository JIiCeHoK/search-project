import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    TuiRootModule, TuiNotificationsModule,
    TuiDialogModule,
} from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiNotificationsModule,
        TuiDialogModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
