import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { StartPanelService } from 'src/app/providers/start-panel.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit, OnChanges {

  @Input() tasks: any = [];
  @Output() sendTaskClick = new EventEmitter();

  constructor(private startPanelService: StartPanelService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tasks && changes.tasks.previousValue !== changes.tasks.currentValue) {
      this.tasks = changes.tasks.currentValue;
    }
  }

  toggleStart(): void {
    if (this.startPanelService.getStartPanelStatus()) {
      this.startPanelService.closeStartPanel();
    } else {
      this.startPanelService.openStartPanel();
    }
  }

  onTask(id: number): void {
    this.sendTaskClick.emit(id);
  }

}
