import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartPanelService {

  startPanel = false;

  private sendStartPanelStatusSource = new Subject();
  sendStartPanelStatus$ = this.sendStartPanelStatusSource.asObservable();

  constructor() { }

  closeStartPanel(): void {
    this.startPanel = false;
    this.sendStartPanelStatusSource.next();
  }

  openStartPanel(): void {
    this.startPanel = true;
    this.sendStartPanelStatusSource.next();
  }

  getStartPanelStatus(): boolean {
    return this.startPanel;
  }
}
