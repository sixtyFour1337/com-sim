import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootService } from './providers/boot.service';

import { SafePipe } from './pipes/safe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BootScreenComponent } from './container/boot-screen/boot-screen.component';
import { StartLogoScreenComponent } from './container/start-logo-screen/start-logo-screen.component';
import { DesktopComponent } from './container/desktop/desktop.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { StartPanelComponent } from './components/start-panel/start-panel.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    BootScreenComponent,
    StartLogoScreenComponent,
    DesktopComponent,
    TaskbarComponent,
    StartPanelComponent,
    IconComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BootService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
