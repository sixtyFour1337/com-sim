import { Component, OnInit } from '@angular/core';
import { BootService } from 'src/app/providers/boot.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(private bootService: BootService) { }

  ngOnInit(): void {
  }

  clearSession(): void {
    this.bootService.clearSessionStorage();
  }

}
