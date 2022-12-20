import { Component, OnInit } from '@angular/core';
import { StartPanelService } from 'src/app/providers/start-panel.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  toggledStart = false;
  openWindow = false;
  textEditor = false;
  isSingleClick = false;

  windows = [];
  tasks = [];
  desktopIcons = [
    { id: 1, icon: 'text-editor', title: 'Text Editor', active: false }
  ];
  textEditorText = [{text: '', finished: false}];

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

    this.windows.push({id: this.getValidWindowId(), title: 'test title ' + this.getValidWindowId(), minimized: false});
    this.tasks.push({id: this.getValidWindowId(), title: 'test title ' + this.getValidWindowId(), active: true});
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
      this.windows.push({id: this.getValidWindowId(), title: 'Text Editor', minimized: false});
      this.tasks.push({id: this.getValidWindowId(), title: 'Text Editor', active: true});
      this.textEditor = true;
    }
  }

  getValidWindowId(): number {
    return this.windows.length > 0 ? this.windows[this.windows.length - 1].id + 1 : 1;
  }

  textEditorKeyDown(event): void {

    console.log('event', event.key);

    if (event.key.length === 1) {
      this.textEditorKey(event.key);
    } else {
      switch (event.key) {
        case 'Enter':
          this.textEditorEnter();
          break;
        case 'Backspace':
          this.textEditorBackspace();
          break;
      }
    }
  }

  textEditorKey(key: string): void {
    this.textEditorText[this.textEditorText.length - 1].text += key;
  }

  textEditorEnter(): void {
    this.removeCaretsFromLines();
    this.textEditorText.push({text: '', finished: false});
  }

  textEditorBackspace(): void {
    if (this.textEditorText[this.textEditorText.length - 1].text.length >= 1) {
      // tslint:disable-next-line: max-line-length
      this.textEditorText[this.textEditorText.length - 1].text = this.textEditorText[this.textEditorText.length - 1].text.slice(0, -1);
    } else if (this.textEditorText[this.textEditorText.length - 1].text.length === 0 && this.textEditorText.length >= 2) {
      this.textEditorText.splice(this.textEditorText.indexOf(this.textEditorText[this.textEditorText.length - 1]), 1);
      this.addCaretToLastLine();
    }
  }

  removeCaretsFromLines(): void {
    this.textEditorText.forEach(el => el.finished = true);
  }

  addCaretToLastLine(): void {
    this.textEditorText[this.textEditorText.length - 1].finished = false;
  }
}
