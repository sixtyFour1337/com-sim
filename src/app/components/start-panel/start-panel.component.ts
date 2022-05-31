import { Component, OnInit } from '@angular/core';
import { BootService } from 'src/app/providers/boot.service';

@Component({
  selector: 'app-start-panel',
  templateUrl: './start-panel.component.html',
  styleUrls: ['./start-panel.component.scss']
})
export class StartPanelComponent implements OnInit {

  constructor(private bootService: BootService) { }

  ngOnInit(): void {
  }

  clearSession(): void {
    this.bootService.clearSessionStorage();
  }

}
