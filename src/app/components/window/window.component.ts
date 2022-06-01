import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Output() closeWindow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onMinimize(): void {

  }

  onMaximize(): void {

  }

  onClose(): void {
    this.closeWindow.emit();
  }

}
