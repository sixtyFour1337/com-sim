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

  boxes = [1];

  constructor(public startPanelService: StartPanelService) {
    this.startPanelService.sendStartPanelStatus$.subscribe(() => {
      this.toggledStart = this.startPanelService.getStartPanelStatus();
    });
  }

  ngOnInit(): void {
    // this.toggledStart = this.startPanelService.getStartPanelStatus();
    // console.log('hallo', this.toggledStart);
  }

  toggleStart(value: boolean): void {
    this.toggledStart = value;
  }

  onDesktop(): void {
    this.startPanelService.closeStartPanel();
  }

  onOpenWindow(value: any): void {
    this.startPanelService.closeStartPanel();
    this.windows.push(1);
  }

}
