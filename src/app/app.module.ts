import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
// can import components, directives, pipes, services


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService], // this is for services
  bootstrap: [AppComponent]
})
export class AppModule { }
