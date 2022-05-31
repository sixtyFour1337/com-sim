import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  @Input() tasks: any = [];
  @Output() toggledStart = new EventEmitter<boolean>();

  startToggle = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart(): void {
    this.startToggle = !this.startToggle;
    this.toggledStart.emit(this.startToggle);
  }

}
