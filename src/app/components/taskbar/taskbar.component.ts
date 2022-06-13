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

  public time = '';
  public timeTimeout: any;
  public date = '';

  constructor(private startPanelService: StartPanelService) { }

  ngOnInit(): void {
    this.currentTime();
    this.getDate();
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

  currentTime(): void  {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    hour = this.updateTime(hour);
    min = this.updateTime(min);

    this.time = hour + ':' + min;
    this.timeTimeout = setTimeout(() => { this.currentTime(); }, 1000);
  }

  updateTime(k: number): any {
    if (k < 10) {
      return '0' + k;
    }
    else {
      return k;
    }
  }

  getDate(): void {
    const date = new Date();
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    month = month.toString().length === 1 ? '0' + month : month;
    const day = date.getDate();
    this.date = day + '.' + month + '.' + year;
  }

}
