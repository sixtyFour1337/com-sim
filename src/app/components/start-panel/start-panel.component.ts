import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BootService } from 'src/app/providers/boot.service';

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.scss']
})
export class StartPanelComponent implements OnInit {

  @Output() openedWindow = new EventEmitter<any>();

  constructor(private bootService: BootService) { }

  ngOnInit(): void {
  }

  restartCom(): void {
    // clears session and restarts page and following animations
    this.bootService.clearSessionStorage();
    window.location.reload();
  }

  openWindow(): void {
    this.openedWindow.emit(true);
  }

}
