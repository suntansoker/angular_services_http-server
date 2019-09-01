import {HttpClientModule} from '@angular/common/http';
import {ProdService} from './prod.service';
import { ProdComponent } from './prod.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './about.component';
import { Prod1Component } from './prod1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, AboutComponent,ProdComponent,Prod1Component
  ],
  providers: [ProdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
