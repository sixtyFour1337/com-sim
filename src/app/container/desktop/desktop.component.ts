import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  toggledStart = false;

  openWindow = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart(value: boolean): void {
    this.toggledStart = value;
  }

  onDesktop(): void {

  }

  onOpenWindow(value: any): void {
    this.openWindow = true;
  }

}
