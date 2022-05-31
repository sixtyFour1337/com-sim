import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootScreenComponent } from './container/boot-screen/boot-screen.component';
import { StartLogoScreenComponent } from './container/start-logo-screen/start-logo-screen.component';
import { DesktopComponent } from './container/desktop/desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    BootScreenComponent,
    StartLogoScreenComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
