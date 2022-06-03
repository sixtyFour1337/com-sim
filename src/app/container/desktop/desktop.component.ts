import { Component, OnInit } from '@angular/core';
import { StartPanelService } from 'src/app/providers/start-panel.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  toggledStart = false;

  openWindow = false;

  windows = [];

  tasks = [];

  constructor(public startPanelService: StartPanelService) {
    this.startPanelService.sendStartPanelStatus$.subscribe(() => {
      this.toggledStart = this.startPanelService.getStartPanelStatus();
    });
  }

  ngOnInit(): void {
  }

  toggleStart(value: boolean): void {
    this.toggledStart = value;
  }

  onDesktop(): void {
    this.startPanelService.closeStartPanel();
  }

  onOpenWindow(value: any): void {
    this.startPanelService.closeStartPanel();

    const validId = this.windows.length > 0 ? this.windows[this.windows.length - 1].id + 1 : 1;

    this.windows.push({id: validId, title: 'test title ' + validId, minimized: false});
    this.tasks.push({id: validId, title: 'test title ' + validId, active: true});
  }

  onMinimize(id: number): void {
    this.windows.forEach(el => {
      if (el.id === id) {
        if (el.minimized) {
          el.minimized = false;
        } else {
          el.minimized = true;
        }
      }
    });
    this.tasks.forEach(el => {
      if (el.id === id) {
        if (el.active) {
          el.active = false;
        } else {
          el.active = true;
        }
      }
    });
  }

  onMaximize(id: number): void {

  }

  onClose(id: number): void {
    this.windows = this.windows.filter(el => el.id !== id);
    this.tasks = this.tasks.filter(el => el.id !== id);
  }

}
