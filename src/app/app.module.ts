import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
