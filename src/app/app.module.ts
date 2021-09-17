import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubService } from "./github.service";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ChartsModule} from "@progress/kendo-angular-charts";

import "hammerjs"


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [
    GithubService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
