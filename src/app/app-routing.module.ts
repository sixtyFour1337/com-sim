import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootScreenComponent } from './container/boot-screen/boot-screen.component';
import { StartLogoScreenComponent } from './container/start-logo-screen/start-logo-screen.component';
import { DesktopComponent } from './container/desktop/desktop.component';

const routes: Routes = [
  { path: '/bootscreen', component: BootScreenComponent },
  { path: '/startlogoscreen', component: StartLogoScreenComponent },
  { path: '/desktop', component: DesktopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
