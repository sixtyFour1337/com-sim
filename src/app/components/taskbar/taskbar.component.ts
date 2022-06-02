import { Component, OnInit, Input } from '@angular/core';
import { StartPanelService } from 'src/app/providers/start-panel.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  @Input() tasks: any = [];

  constructor(private startPanelService: StartPanelService) { }

  ngOnInit(): void {
  }

  toggleStart(): void {
    if (this.startPanelService.getStartPanelStatus()) {
      this.startPanelService.closeStartPanel();
    } else {
      this.startPanelService.openStartPanel();
    }
  }

}
