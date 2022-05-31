import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  toggledStart = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart(value: boolean): void {
    this.toggledStart = value;
  }

}
