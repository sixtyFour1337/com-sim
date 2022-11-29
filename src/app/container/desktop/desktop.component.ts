import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StartPanelService } from 'src/app/providers/start-panel.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  @ViewChild('textEditorContent', {static: false}) textEditorContent: ElementRef<HTMLElement>;

  toggledStart = false;
  openWindow = false;
  textEditor = false;
  isSingleClick = false;

  windows = [];
  tasks = [];
  desktopIcons = [
    { id: 1, icon: 'text-editor', title: 'Text Editor', active: false }
  ];

  constructor(public startPanelService: StartPanelService) {
    this.startPanelService.sendStartPanelStatus$.subscribe(() => {
      this.toggledStart = this.startPanelService.getStartPanelStatus();
    });
  }

  ngOnInit(): void {
  }

  toggleStart(value: boolean): void {
    this.toggledStart = value;
  }

  onDesktop(): void {
    this.startPanelService.closeStartPanel();
    // this.desktopIcons.forEach(el => el.active = false);
  }

  onOpenWindow(value: any): void {
    this.startPanelService.closeStartPanel();

    const validId = this.windows.length > 0 ? this.windows[this.windows.length - 1].id + 1 : 1;

    this.windows.push({id: validId, title: 'test title ' + validId, minimized: false});
    this.tasks.push({id: validId, title: 'test title ' + validId, active: true});
  }

  onMinimize(id: number): void {
    this.windows.forEach(el => {
      if (el.id === id) {
        el.minimized = !el.minimized;
      }
    });
    this.tasks.forEach(el => {
      if (el.id === id) {
        el.active = !el.active;
      }
    });
  }

  onMaximize(id: number): void {

  }

  onClose(id: number): void {
    this.windows = this.windows.filter(el => el.id !== id);
    this.tasks = this.tasks.filter(el => el.id !== id);
    this.textEditor = false;
  }

  clickDesktopIcon(event: any, icon: any): void {
    if (event.detail === 1) {
      this.desktopIcons.forEach(el => {
        if (el.id === icon.id) {
          el.active = !el.active;
        }
      });
    } else if (event.detail === 2) {
      this.desktopIcons.forEach(el => el.active = false);
      switch (icon.id) {
        case 1:
          this.openTextEditorWindow();
          break;
      }
    }
  }

  openTextEditorWindow(): void {
    if (!this.textEditor) {
      const validId = this.windows.length > 0 ? this.windows[this.windows.length - 1].id + 1 : 1;
      this.windows.push({id: validId, title: 'Text Editor', minimized: false});
      this.tasks.push({id: validId, title: 'Text Editor', active: true});
      this.textEditor = true;
    }
  }

  textEditorKeyDown(event): void {
    console.log('event', event.key);
    this.textEditorContent.nativeElement.innerHTML += event.key;
  }

}
