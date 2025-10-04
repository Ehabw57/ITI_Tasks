import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './Components/header/header';
import { Side } from './Components/side/side';
import { Footer } from './Components/footer/footer';
import { Products } from './Components/products/products';
import { Card } from './Components/card/card';

@NgModule({
  declarations: [
    App,
    Header,
    Side,
    Footer,
    Products,
    Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
